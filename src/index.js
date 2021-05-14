const Database = require("better-sqlite3");
const util = require("util");
let db;

if (!db) db = new Database("./database.sqlite");

var dc = "https://discord.gg/xMTM9eN"
var methods = {
    fetch: require("./methods/fetch.js"),
    set: require("./methods/set.js"),
    add: require("./methods/add.js"),
    subtract: require("./methods/subtract.js"),
    push: require("./methods/push.js"),
    delete: require("./methods/delete.js"),
    has: require("./methods/has.js"),
    all: require("./methods/all.js"),
    type: require("./methods/type"),
};

module.exports = {
    version: require("../package.json").version,

    /**
     * @param {key} input
     * @param {options} [input={ target: null }]
     * @returns {data}
     */

    fetch: function (key, ops) {
        if (!key)
            throw new TypeError(
                `No key specified. Need Help? Check Out: ${db}`
            );
        return arbitrate("fetch", { id: key, ops: ops || {} });
    },
    get: function (key, ops) {
        if (!key)
            throw new TypeError(
                `No key specified. Need Help? Check Out: ${db}`
            );
        return arbitrate("fetch", { id: key, ops: ops || {} });
    },

    /**
     * @param {key} input
     * @param {options} [input={ target: null }]
     * @returns {data}
     */

    set: function (key, value, ops) {
        if (!key)
            throw new TypeError(
                `No key specified. Need Help? Check Out: ${db}`
            );
        if (value === undefined)
            throw new TypeError(
                `No key specified. Need Help? Check Out: ${db}`
            );
        return arbitrate("set", {
            stringify: true,
            id: key,
            data: value,
            ops: ops || {},
        });
    },

    /**
     * @param {key} input
     * @param {options} [input={ target: null }]
     * @returns {data}
     */

    add: function (key, value, ops) {
        if (!key)
            throw new TypeError(
                `No key specified. Need Help? Check Out: ${db}`
            );
        if (isNaN(value))
            throw new TypeError(
                `Must specify value to add. Need Help? Check Out: ${db}`
            );
        return arbitrate("add", { id: key, data: value, ops: ops || {} });
    },

    /**
     * @param {key} input
     * @param {options} [input={ target: null }]
     * @returns {data}
     */

    subtract: function (key, value, ops) {
        if (!key)
            throw new TypeError(
                `No key specified. Need Help? Check Out: ${db}`
            );
        if (isNaN(value))
            throw new TypeError(
                `Must specify value to add. Need Help? Check Out: ${db}`
            );
        return arbitrate("subtract", { id: key, data: value, ops: ops || {} });
    },

    /**
     * @param {key} input
     * @param {options} [input={ target: null }]
     * @returns {data}
     */

    push: function (key, value, ops) {
        if (!key)
            throw new TypeError(
                `No key specified. Need Help? Check Out: ${db}`
            );
        if (!value && value != 0)
            throw new TypeError(
                `Must specify value to add. Need Help? Check Out: ${db}`
            );
        return arbitrate("push", {
            stringify: true,
            id: key,
            data: value,
            ops: ops || {},
        });
    },

    /**
     * @param {key} input
     * @param {options} [input={ target: null }]
     * @returns {boolean}
     */

    delete: function (key, ops) {
        if (!key)
            throw new TypeError(
                `No key specified. Need Help? Check Out: ${db}`
            );
        return arbitrate("delete", { id: key, ops: ops || {} });
    },

    /**
     * @param {key} input
     * @param {options} [input={ target: null }]
     * @returns {boolean}
     */

    has: function (key, ops) {
        if (!key)
            throw new TypeError(
                `No key specified. Need Help? Check Out: ${db}`
            );
        return arbitrate("has", { id: key, ops: ops || {} });
    },

    includes: function (key, ops) {
        if (!key)
            throw new TypeError(
                `No key specified. Need Help? Check Out: ${db}`
            );
        return arbitrate("has", { id: key, ops: ops || {} });
    },

    /**
     * @param {options} [input={ target: null }] 
     * @returns {boolean}
     */

    all: function (ops) {
        return arbitrate("all", { ops: ops || {} });
    },

    fetchAll: function (ops) {
        return arbitrate("all", { ops: ops || {} });
    },

    type: function (key, ops) {
        if (!key)
            throw new TypeError(
                `No key specified. Need Help? Check Out: ${db}`
            );
        return arbitrate("type", { id: key, ops: ops || {} });
    },

    /**
     * @param {name} input
     * @param {options} options.
     */

    table: function (tableName, options = {}) {
        if (typeof tableName !== "string")
            throw new TypeError(
                `Table name has to be a string. Need Help? Check Out: ${db}`
            );
        else if (tableName.includes(" "))
            throw new TypeError(
                `Table name cannot include spaces. Need Help? Check Out: ${db}`
            );
        this.tableName = tableName;

        this.fetch = function (key, ops) {
            if (!key)
                throw new TypeError(
                    `No key specified. Need Help? Check Out: ${db}`
                    );
            return arbitrate(
                "fetch",
                { id: key, ops: ops || {} },
                this.tableName
            );
        };

        this.get = function (key, ops) {
            if (!key)
                throw new TypeError(
                    `No key specified. Need Help? Check Out: ${db}`
                    );
            return arbitrate(
                "fetch",
                { id: key, ops: ops || {} },
                this.tableName
            );
        };

        this.set = function (key, value, ops) {
            if (!key)
                throw new TypeError(
                    `No key specified. Need Help? Check Out: ${db}`
                    );
            if (!value && value != 0)
                throw new TypeError(
                    `No key specified. Need Help? Check Out: ${db}`
                    );
            return arbitrate(
                "set",
                { stringify: true, id: key, data: value, ops: ops || {} },
                this.tableName
            );
        };

        this.add = function (key, value, ops) {
            if (!key)
                throw new TypeError(
                    `No key specified. Need Help? Check Out: ${db}`
                    );
            if (isNaN(value))
                throw new TypeError(
                    `Must specify value to add. Need Help? Check Out: ${db}`
                );
            return arbitrate(
                "add",
                { id: key, data: value, ops: ops || {} },
                this.tableName
            );
        };

        this.subtract = function (key, value, ops) {
            if (!key)
                throw new TypeError(
                    `No key specified. Need Help? Check Out: ${db}`
                );
            if (isNaN(value))
                throw new TypeError(
                    `Must specify value to add. Need Help? Check Out: ${db}`
                );
            return arbitrate(
                "subtract",
                { id: key, data: value, ops: ops || {} },
                this.tableName
            );
        };

        this.push = function (key, value, ops) {
            if (!key)
                throw new TypeError(
                    `No key specified. Need Help? Check Out: ${db}`
                );
            if (!value && value != 0)
                throw new TypeError(
                    `Must specify value to push. Need Help? Check Out: ${db}`
                );
            return arbitrate(
                "push",
                { stringify: true, id: key, data: value, ops: ops || {} },
                this.tableName
            );
        };

        this.delete = function (key, ops) {
            if (!key)
                throw new TypeError(
                    `No key specified. Need Help? Check Out: ${db}`
                );
            return arbitrate(
                "delete",
                { id: key, ops: ops || {} },
                this.tableName
            );
        };

        this.has = function (key, ops) {
            if (!key)
                throw new TypeError(
                    `No key specified. Need Help? Check Out: ${db}`
                );
            return arbitrate(
                "has",
                { id: key, ops: ops || {} },
                this.tableName
            );
        };

        this.includes = function (key, ops) {
            if (!key)
                throw new TypeError(
                    `No key specified. Need Help? Check Out: ${db}`
                );
            return arbitrate(
                "has",
                { id: key, ops: ops || {} },
                this.tableName
            );
        };

        this.fetchAll = function (ops) {
            return arbitrate("all", { ops: ops || {} }, this.tableName);
        };

        this.all = function (ops) {
            return arbitrate("all", { ops: ops || {} }, this.tableName);
        };
    },
};

function arbitrate(method, params, tableName) {
    let options = {
        table: tableName || params.ops.table || "json",
    };

    db.prepare(`CREATE TABLE IF NOT EXISTS ${options.table} (ID TEXT, json TEXT)`).run();

    if (params.ops.target && params.ops.target[0] === ".")
        params.ops.target = params.ops.target.slice(1); 
    if (params.data && params.data === Infinity)
        throw new TypeError(
            `You cannot set Infinity into the database @ ID: ${params.id}`

            `You cannot set Infinity into the database @ ID: ${params.id}`
        );

    if (params.stringify) {
        try {
            params.data = JSON.stringify(params.data);
        } catch (e) {
            throw new TypeError(
                `Please supply a valid input @ ID: ${params.id}\nError: ${e.message}`
            );
        }
    }

    if (params.id && params.id.includes(".")) {
        let unparsed = params.id.split(".");
        params.id = unparsed.shift();
        params.ops.target = unparsed.join(".");
    }

    return methods[method](db, params, options);
}
