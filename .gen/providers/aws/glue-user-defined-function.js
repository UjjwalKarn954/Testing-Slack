"use strict";
// https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function.html
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
exports.GlueUserDefinedFunction = void 0;
var cdktf = require("cdktf");
function glueUserDefinedFunctionResourceUrisToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        resource_type: cdktf.stringToTerraform(struct.resourceType),
        uri: cdktf.stringToTerraform(struct.uri)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function.html aws_glue_user_defined_function}
*/
var GlueUserDefinedFunction = /** @class */ (function (_super) {
    __extends(GlueUserDefinedFunction, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function.html aws_glue_user_defined_function} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueUserDefinedFunctionConfig
    */
    function GlueUserDefinedFunction(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_glue_user_defined_function',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._catalogId = config.catalogId;
        _this._className = config.className;
        _this._databaseName = config.databaseName;
        _this._name = config.name;
        _this._ownerName = config.ownerName;
        _this._ownerType = config.ownerType;
        _this._resourceUris = config.resourceUris;
        return _this;
    }
    Object.defineProperty(GlueUserDefinedFunction.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueUserDefinedFunction.prototype, "catalogId", {
        get: function () {
            return this.getStringAttribute('catalog_id');
        },
        set: function (value) {
            this._catalogId = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueUserDefinedFunction.prototype.resetCatalogId = function () {
        this._catalogId = undefined;
    };
    Object.defineProperty(GlueUserDefinedFunction.prototype, "catalogIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._catalogId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueUserDefinedFunction.prototype, "className", {
        get: function () {
            return this.getStringAttribute('class_name');
        },
        set: function (value) {
            this._className = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueUserDefinedFunction.prototype, "classNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._className;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueUserDefinedFunction.prototype, "createTime", {
        // create_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('create_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueUserDefinedFunction.prototype, "databaseName", {
        get: function () {
            return this.getStringAttribute('database_name');
        },
        set: function (value) {
            this._databaseName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueUserDefinedFunction.prototype, "databaseNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._databaseName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueUserDefinedFunction.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueUserDefinedFunction.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueUserDefinedFunction.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueUserDefinedFunction.prototype, "ownerName", {
        get: function () {
            return this.getStringAttribute('owner_name');
        },
        set: function (value) {
            this._ownerName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueUserDefinedFunction.prototype, "ownerNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ownerName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueUserDefinedFunction.prototype, "ownerType", {
        get: function () {
            return this.getStringAttribute('owner_type');
        },
        set: function (value) {
            this._ownerType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueUserDefinedFunction.prototype, "ownerTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ownerType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueUserDefinedFunction.prototype, "resourceUris", {
        get: function () {
            return this.interpolationForAttribute('resource_uris');
        },
        set: function (value) {
            this._resourceUris = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueUserDefinedFunction.prototype.resetResourceUris = function () {
        this._resourceUris = undefined;
    };
    Object.defineProperty(GlueUserDefinedFunction.prototype, "resourceUrisInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceUris;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    GlueUserDefinedFunction.prototype.synthesizeAttributes = function () {
        return {
            catalog_id: cdktf.stringToTerraform(this._catalogId),
            class_name: cdktf.stringToTerraform(this._className),
            database_name: cdktf.stringToTerraform(this._databaseName),
            name: cdktf.stringToTerraform(this._name),
            owner_name: cdktf.stringToTerraform(this._ownerName),
            owner_type: cdktf.stringToTerraform(this._ownerType),
            resource_uris: cdktf.listMapper(glueUserDefinedFunctionResourceUrisToTerraform)(this._resourceUris)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    GlueUserDefinedFunction.tfResourceType = "aws_glue_user_defined_function";
    return GlueUserDefinedFunction;
}(cdktf.TerraformResource));
exports.GlueUserDefinedFunction = GlueUserDefinedFunction;
