"use strict";
// https://www.terraform.io/docs/providers/aws/r/glue_catalog_database.html
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
exports.GlueCatalogDatabase = void 0;
var cdktf = require("cdktf");
function glueCatalogDatabaseTargetDatabaseToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        catalog_id: cdktf.stringToTerraform(struct.catalogId),
        database_name: cdktf.stringToTerraform(struct.databaseName)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database.html aws_glue_catalog_database}
*/
var GlueCatalogDatabase = /** @class */ (function (_super) {
    __extends(GlueCatalogDatabase, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database.html aws_glue_catalog_database} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueCatalogDatabaseConfig
    */
    function GlueCatalogDatabase(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_glue_catalog_database',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._catalogId = config.catalogId;
        _this._description = config.description;
        _this._locationUri = config.locationUri;
        _this._name = config.name;
        _this._parameters = config.parameters;
        _this._targetDatabase = config.targetDatabase;
        return _this;
    }
    Object.defineProperty(GlueCatalogDatabase.prototype, "arn", {
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
    Object.defineProperty(GlueCatalogDatabase.prototype, "catalogId", {
        get: function () {
            return this.getStringAttribute('catalog_id');
        },
        set: function (value) {
            this._catalogId = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueCatalogDatabase.prototype.resetCatalogId = function () {
        this._catalogId = undefined;
    };
    Object.defineProperty(GlueCatalogDatabase.prototype, "catalogIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._catalogId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCatalogDatabase.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueCatalogDatabase.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(GlueCatalogDatabase.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCatalogDatabase.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCatalogDatabase.prototype, "locationUri", {
        get: function () {
            return this.getStringAttribute('location_uri');
        },
        set: function (value) {
            this._locationUri = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueCatalogDatabase.prototype.resetLocationUri = function () {
        this._locationUri = undefined;
    };
    Object.defineProperty(GlueCatalogDatabase.prototype, "locationUriInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._locationUri;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCatalogDatabase.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCatalogDatabase.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCatalogDatabase.prototype, "parameters", {
        get: function () {
            return this.interpolationForAttribute('parameters');
        },
        set: function (value) {
            this._parameters = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueCatalogDatabase.prototype.resetParameters = function () {
        this._parameters = undefined;
    };
    Object.defineProperty(GlueCatalogDatabase.prototype, "parametersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parameters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCatalogDatabase.prototype, "targetDatabase", {
        get: function () {
            return this.interpolationForAttribute('target_database');
        },
        set: function (value) {
            this._targetDatabase = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueCatalogDatabase.prototype.resetTargetDatabase = function () {
        this._targetDatabase = undefined;
    };
    Object.defineProperty(GlueCatalogDatabase.prototype, "targetDatabaseInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetDatabase;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    GlueCatalogDatabase.prototype.synthesizeAttributes = function () {
        return {
            catalog_id: cdktf.stringToTerraform(this._catalogId),
            description: cdktf.stringToTerraform(this._description),
            location_uri: cdktf.stringToTerraform(this._locationUri),
            name: cdktf.stringToTerraform(this._name),
            parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
            target_database: cdktf.listMapper(glueCatalogDatabaseTargetDatabaseToTerraform)(this._targetDatabase)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    GlueCatalogDatabase.tfResourceType = "aws_glue_catalog_database";
    return GlueCatalogDatabase;
}(cdktf.TerraformResource));
exports.GlueCatalogDatabase = GlueCatalogDatabase;
