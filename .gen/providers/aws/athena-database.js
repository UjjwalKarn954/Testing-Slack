"use strict";
// https://www.terraform.io/docs/providers/aws/r/athena_database.html
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
exports.AthenaDatabase = void 0;
var cdktf = require("cdktf");
function athenaDatabaseEncryptionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        encryption_option: cdktf.stringToTerraform(struct.encryptionOption),
        kms_key: cdktf.stringToTerraform(struct.kmsKey)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/athena_database.html aws_athena_database}
*/
var AthenaDatabase = /** @class */ (function (_super) {
    __extends(AthenaDatabase, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/athena_database.html aws_athena_database} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AthenaDatabaseConfig
    */
    function AthenaDatabase(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_athena_database',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._bucket = config.bucket;
        _this._forceDestroy = config.forceDestroy;
        _this._name = config.name;
        _this._encryptionConfiguration = config.encryptionConfiguration;
        return _this;
    }
    Object.defineProperty(AthenaDatabase.prototype, "bucket", {
        get: function () {
            return this.getStringAttribute('bucket');
        },
        set: function (value) {
            this._bucket = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AthenaDatabase.prototype, "bucketInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AthenaDatabase.prototype, "forceDestroy", {
        get: function () {
            return this.getBooleanAttribute('force_destroy');
        },
        set: function (value) {
            this._forceDestroy = value;
        },
        enumerable: false,
        configurable: true
    });
    AthenaDatabase.prototype.resetForceDestroy = function () {
        this._forceDestroy = undefined;
    };
    Object.defineProperty(AthenaDatabase.prototype, "forceDestroyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._forceDestroy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AthenaDatabase.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AthenaDatabase.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AthenaDatabase.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AthenaDatabase.prototype, "encryptionConfiguration", {
        get: function () {
            return this.interpolationForAttribute('encryption_configuration');
        },
        set: function (value) {
            this._encryptionConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    AthenaDatabase.prototype.resetEncryptionConfiguration = function () {
        this._encryptionConfiguration = undefined;
    };
    Object.defineProperty(AthenaDatabase.prototype, "encryptionConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._encryptionConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AthenaDatabase.prototype.synthesizeAttributes = function () {
        return {
            bucket: cdktf.stringToTerraform(this._bucket),
            force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
            name: cdktf.stringToTerraform(this._name),
            encryption_configuration: cdktf.listMapper(athenaDatabaseEncryptionConfigurationToTerraform)(this._encryptionConfiguration)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AthenaDatabase.tfResourceType = "aws_athena_database";
    return AthenaDatabase;
}(cdktf.TerraformResource));
exports.AthenaDatabase = AthenaDatabase;
