"use strict";
// https://www.terraform.io/docs/providers/aws/r/timestreamwrite_database.html
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
exports.TimestreamwriteDatabase = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_database.html aws_timestreamwrite_database}
*/
var TimestreamwriteDatabase = /** @class */ (function (_super) {
    __extends(TimestreamwriteDatabase, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_database.html aws_timestreamwrite_database} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TimestreamwriteDatabaseConfig
    */
    function TimestreamwriteDatabase(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_timestreamwrite_database',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._databaseName = config.databaseName;
        _this._kmsKeyId = config.kmsKeyId;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(TimestreamwriteDatabase.prototype, "arn", {
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
    Object.defineProperty(TimestreamwriteDatabase.prototype, "databaseName", {
        get: function () {
            return this.getStringAttribute('database_name');
        },
        set: function (value) {
            this._databaseName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimestreamwriteDatabase.prototype, "databaseNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._databaseName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimestreamwriteDatabase.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimestreamwriteDatabase.prototype, "kmsKeyId", {
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        set: function (value) {
            this._kmsKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    TimestreamwriteDatabase.prototype.resetKmsKeyId = function () {
        this._kmsKeyId = undefined;
    };
    Object.defineProperty(TimestreamwriteDatabase.prototype, "kmsKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimestreamwriteDatabase.prototype, "tableCount", {
        // table_count - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('table_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimestreamwriteDatabase.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    TimestreamwriteDatabase.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(TimestreamwriteDatabase.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimestreamwriteDatabase.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    TimestreamwriteDatabase.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(TimestreamwriteDatabase.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    TimestreamwriteDatabase.prototype.synthesizeAttributes = function () {
        return {
            database_name: cdktf.stringToTerraform(this._databaseName),
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    TimestreamwriteDatabase.tfResourceType = "aws_timestreamwrite_database";
    return TimestreamwriteDatabase;
}(cdktf.TerraformResource));
exports.TimestreamwriteDatabase = TimestreamwriteDatabase;
