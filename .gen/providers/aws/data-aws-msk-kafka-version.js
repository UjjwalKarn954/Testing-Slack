"use strict";
// https://www.terraform.io/docs/providers/aws/d/msk_kafka_version.html
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
exports.DataAwsMskKafkaVersion = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/msk_kafka_version.html aws_msk_kafka_version}
*/
var DataAwsMskKafkaVersion = /** @class */ (function (_super) {
    __extends(DataAwsMskKafkaVersion, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/msk_kafka_version.html aws_msk_kafka_version} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsMskKafkaVersionConfig = {}
    */
    function DataAwsMskKafkaVersion(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_msk_kafka_version',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._preferredVersions = config.preferredVersions;
        _this._version = config.version;
        return _this;
    }
    Object.defineProperty(DataAwsMskKafkaVersion.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMskKafkaVersion.prototype, "preferredVersions", {
        get: function () {
            return this.getListAttribute('preferred_versions');
        },
        set: function (value) {
            this._preferredVersions = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsMskKafkaVersion.prototype.resetPreferredVersions = function () {
        this._preferredVersions = undefined;
    };
    Object.defineProperty(DataAwsMskKafkaVersion.prototype, "preferredVersionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preferredVersions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMskKafkaVersion.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsMskKafkaVersion.prototype, "version", {
        get: function () {
            return this.getStringAttribute('version');
        },
        set: function (value) {
            this._version = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsMskKafkaVersion.prototype.resetVersion = function () {
        this._version = undefined;
    };
    Object.defineProperty(DataAwsMskKafkaVersion.prototype, "versionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._version;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsMskKafkaVersion.prototype.synthesizeAttributes = function () {
        return {
            preferred_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredVersions),
            version: cdktf.stringToTerraform(this._version)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsMskKafkaVersion.tfResourceType = "aws_msk_kafka_version";
    return DataAwsMskKafkaVersion;
}(cdktf.TerraformDataSource));
exports.DataAwsMskKafkaVersion = DataAwsMskKafkaVersion;
