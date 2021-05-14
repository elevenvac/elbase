declare module 'elbase' {
    export interface Options {
        target?: string | null;
        table?: string;
    }

    export type ValueData = string | object | number | null | boolean | bigint | symbol | any[];
    const version: string;

    /**
     * @param key
     * @param ops
     */
    function fetch(key: string, ops?: Options): any;

    /**
     * @param key
     * @param ops
     */
    function get(key: string, ops?: Options): any;

    /**
     * @param key
     * @param value
     * @param ops
     */
    function set(key: string, value: ValueData, ops?: Options): any;

    /**
     * @param key 
     * @param value
     * @param ops 
     */
    function add(key: string, value: number, ops?: Options): any;

    /**
     * @param key 
     * @param value
     * @param ops
     */
    function subtract(key: string, value: number, ops?: Options): any;

    /**
     * @param key
     * @param value
     * @param ops
     */
    function push(key: string, value: ValueData, ops?: Options): any[];

    /**
     * @param key
     * @param ops
     */
    function has(key: string, ops?: Options): boolean;

    /**
     * @param key 
     * @param ops
     */
    function includes(key: string, ops?: Options): boolean;

    /**
     * @param ops
     */
    function all(ops?: Options): { ID: string; data: any; }[];

    /**
     * @param ops 
     */
    function fetchAll(ops?: Options): { ID: string; data: any; }[];

    /**
     * @param key
     * @param ops
     */
    function del(key: string, ops?: Options): boolean;

    /**
     * @param key
     * @param ops
     */
    function dataType(key: string, ops?: Options): "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";

    class Table {
        tableName: string;

        /**
         * @param tableName
         * @param options
         */
        public constructor(tableName: string, options?: object);

        /**
         * @param key 
         * @param value 
         * @param ops 
         */
        public set(key: string, value: ValueData, ops?: Options): any;

        /**
         * @param key 
         * @param ops
         */
        public get(key: string, ops?: Options): any;

        /**
         * @param key 
         * @param ops 
         */
        public fetch(key: string, ops?: Options): any;

        /**
         * @param key 
         * @param value
         * @param ops
         */
        public add(key: string, value: number, ops?: Options): any;

        /**
         * @param key 
         * @param value
         * @param ops
         */
        public subtract(key: string, value: number, ops?: Options): any;

        /**
         * @param key
         * @param value
         * @param ops
         */
        public push(key: string, value: ValueData, ops?: Options): any[];

        /**
         * @param key 
         * @param ops 
         */
        public has(key: string, ops?: Options): boolean;

        /**
         * @param key
         * @param ops
         */
        public includes(key: string, ops?: Options): boolean;

        /**
         * @param ops 
         */
        public all(ops?: Options): { ID: string; data: any }[];

        /**
         * @param ops 
         */
        public fetchAll(ops?: Options): { ID: string; data: any }[];

        /**
         * @param key
         * @param ops
         */
        public delete(key: string, ops?: Options): boolean;
    }

    export {
        fetch,
        get,
        set,
        add,
        subtract,
        push,
        has,
        includes,
        all,
        fetchAll,
        del as delete,
        dataType as type,
        Table as table,
        version
    }

}
