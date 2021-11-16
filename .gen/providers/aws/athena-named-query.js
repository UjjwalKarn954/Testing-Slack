"use strict";
// https://www.terraform.io/docs/providers/aws/r/athena_named_query.html
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.AthenaNamedQuery = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/athena_named_query.html aws_athena_named_query}
*/
var AthenaNamedQuery = /** @class */ (function (_super) {
    __extends(AthenaNamedQuery, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/athena_named_query.html aws_athena_named_query} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AthenaNamedQueryConfig
    */
    function AthenaNamedQuery(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_athena_named_query',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._database = config.database;
        _this._description = config.description;
        _this._name = config.name;
        _this._query = config.query;
        _this._workgroup = config.workgroup;
        return _this;
    }
    Object.defineProperty(AthenaNamedQuery.prototype, "database", {
        get: function () {
            return this.getStringAttribute('database');
        },
        set: function (value) {
            this._database = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AthenaNamedQuery.prototype, "databaseInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._database;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AthenaNamedQuery.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    AthenaNamedQuery.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(AthenaNamedQuery.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AthenaNamedQuery.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AthenaNamedQuery.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AthenaNamedQuery.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AthenaNamedQuery.prototype, "query", {
        get: function () {
            return this.getStringAttribute('query');
        },
        set: function (value) {
            this._query = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AthenaNamedQuery.prototype, "queryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._query;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AthenaNamedQuery.prototype, "workgroup", {
        get: function () {
            return this.getStringAttribute('workgroup');
        },
        set: function (value) {
            this._workgroup = value;
        },
        enumerable: false,
        configurable: true
    });
    AthenaNamedQuery.prototype.resetWorkgroup = function () {
        this._workgroup = undefined;
    };
    Object.defineProperty(AthenaNamedQuery.prototype, "workgroupInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._workgroup;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AthenaNamedQuery.prototype.synthesizeAttributes = function () {
        return {
            database: cdktf.stringToTerraform(this._database),
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            query: cdktf.stringToTerraform(this._query),
            workgroup: cdktf.stringToTerraform(this._workgroup)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AthenaNamedQuery.tfResourceType = "aws_athena_named_query";
    return AthenaNamedQuery;
}(cdktf.TerraformResource));
exports.AthenaNamedQuery = AthenaNamedQuery;
