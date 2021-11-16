"use strict";
// https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration.html
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
exports.EcrReplicationConfiguration = void 0;
var cdktf = require("cdktf");
function ecrReplicationConfigurationReplicationConfigurationRuleDestinationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        region: cdktf.stringToTerraform(struct.region),
        registry_id: cdktf.stringToTerraform(struct.registryId)
    };
}
function ecrReplicationConfigurationReplicationConfigurationRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        destination: cdktf.listMapper(ecrReplicationConfigurationReplicationConfigurationRuleDestinationToTerraform)(struct.destination)
    };
}
function ecrReplicationConfigurationReplicationConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        rule: cdktf.listMapper(ecrReplicationConfigurationReplicationConfigurationRuleToTerraform)(struct.rule)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration.html aws_ecr_replication_configuration}
*/
var EcrReplicationConfiguration = /** @class */ (function (_super) {
    __extends(EcrReplicationConfiguration, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration.html aws_ecr_replication_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcrReplicationConfigurationConfig = {}
    */
    function EcrReplicationConfiguration(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ecr_replication_configuration',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._replicationConfiguration = config.replicationConfiguration;
        return _this;
    }
    Object.defineProperty(EcrReplicationConfiguration.prototype, "id", {
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
    Object.defineProperty(EcrReplicationConfiguration.prototype, "registryId", {
        // registry_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('registry_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcrReplicationConfiguration.prototype, "replicationConfiguration", {
        get: function () {
            return this.interpolationForAttribute('replication_configuration');
        },
        set: function (value) {
            this._replicationConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    EcrReplicationConfiguration.prototype.resetReplicationConfiguration = function () {
        this._replicationConfiguration = undefined;
    };
    Object.defineProperty(EcrReplicationConfiguration.prototype, "replicationConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._replicationConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    EcrReplicationConfiguration.prototype.synthesizeAttributes = function () {
        return {
            replication_configuration: cdktf.listMapper(ecrReplicationConfigurationReplicationConfigurationToTerraform)(this._replicationConfiguration)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    EcrReplicationConfiguration.tfResourceType = "aws_ecr_replication_configuration";
    return EcrReplicationConfiguration;
}(cdktf.TerraformResource));
exports.EcrReplicationConfiguration = EcrReplicationConfiguration;
