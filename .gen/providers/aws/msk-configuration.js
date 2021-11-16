"use strict";
// https://www.terraform.io/docs/providers/aws/r/msk_configuration.html
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
exports.MskConfiguration = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/msk_configuration.html aws_msk_configuration}
*/
var MskConfiguration = /** @class */ (function (_super) {
    __extends(MskConfiguration, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/msk_configuration.html aws_msk_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MskConfigurationConfig
    */
    function MskConfiguration(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_msk_configuration',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._kafkaVersions = config.kafkaVersions;
        _this._name = config.name;
        _this._serverProperties = config.serverProperties;
        return _this;
    }
    Object.defineProperty(MskConfiguration.prototype, "arn", {
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
    Object.defineProperty(MskConfiguration.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    MskConfiguration.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(MskConfiguration.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MskConfiguration.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MskConfiguration.prototype, "kafkaVersions", {
        get: function () {
            return this.getListAttribute('kafka_versions');
        },
        set: function (value) {
            this._kafkaVersions = value;
        },
        enumerable: false,
        configurable: true
    });
    MskConfiguration.prototype.resetKafkaVersions = function () {
        this._kafkaVersions = undefined;
    };
    Object.defineProperty(MskConfiguration.prototype, "kafkaVersionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kafkaVersions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MskConfiguration.prototype, "latestRevision", {
        // latest_revision - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('latest_revision');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MskConfiguration.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MskConfiguration.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MskConfiguration.prototype, "serverProperties", {
        get: function () {
            return this.getStringAttribute('server_properties');
        },
        set: function (value) {
            this._serverProperties = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MskConfiguration.prototype, "serverPropertiesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serverProperties;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    MskConfiguration.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            kafka_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._kafkaVersions),
            name: cdktf.stringToTerraform(this._name),
            server_properties: cdktf.stringToTerraform(this._serverProperties)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    MskConfiguration.tfResourceType = "aws_msk_configuration";
    return MskConfiguration;
}(cdktf.TerraformResource));
exports.MskConfiguration = MskConfiguration;
