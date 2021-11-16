"use strict";
// https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html
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
exports.ConfigConfigurationAggregator = void 0;
var cdktf = require("cdktf");
function configConfigurationAggregatorAccountAggregationSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        account_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.accountIds),
        all_regions: cdktf.booleanToTerraform(struct.allRegions),
        regions: cdktf.listMapper(cdktf.stringToTerraform)(struct.regions)
    };
}
function configConfigurationAggregatorOrganizationAggregationSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_regions: cdktf.booleanToTerraform(struct.allRegions),
        regions: cdktf.listMapper(cdktf.stringToTerraform)(struct.regions),
        role_arn: cdktf.stringToTerraform(struct.roleArn)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html aws_config_configuration_aggregator}
*/
var ConfigConfigurationAggregator = /** @class */ (function (_super) {
    __extends(ConfigConfigurationAggregator, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html aws_config_configuration_aggregator} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigConfigurationAggregatorConfig
    */
    function ConfigConfigurationAggregator(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_config_configuration_aggregator',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._accountAggregationSource = config.accountAggregationSource;
        _this._organizationAggregationSource = config.organizationAggregationSource;
        return _this;
    }
    Object.defineProperty(ConfigConfigurationAggregator.prototype, "arn", {
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
    Object.defineProperty(ConfigConfigurationAggregator.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigConfigurationAggregator.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigConfigurationAggregator.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigConfigurationAggregator.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigConfigurationAggregator.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(ConfigConfigurationAggregator.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigConfigurationAggregator.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigConfigurationAggregator.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(ConfigConfigurationAggregator.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigConfigurationAggregator.prototype, "accountAggregationSource", {
        get: function () {
            return this.interpolationForAttribute('account_aggregation_source');
        },
        set: function (value) {
            this._accountAggregationSource = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigConfigurationAggregator.prototype.resetAccountAggregationSource = function () {
        this._accountAggregationSource = undefined;
    };
    Object.defineProperty(ConfigConfigurationAggregator.prototype, "accountAggregationSourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountAggregationSource;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigConfigurationAggregator.prototype, "organizationAggregationSource", {
        get: function () {
            return this.interpolationForAttribute('organization_aggregation_source');
        },
        set: function (value) {
            this._organizationAggregationSource = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigConfigurationAggregator.prototype.resetOrganizationAggregationSource = function () {
        this._organizationAggregationSource = undefined;
    };
    Object.defineProperty(ConfigConfigurationAggregator.prototype, "organizationAggregationSourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._organizationAggregationSource;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ConfigConfigurationAggregator.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            account_aggregation_source: cdktf.listMapper(configConfigurationAggregatorAccountAggregationSourceToTerraform)(this._accountAggregationSource),
            organization_aggregation_source: cdktf.listMapper(configConfigurationAggregatorOrganizationAggregationSourceToTerraform)(this._organizationAggregationSource)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ConfigConfigurationAggregator.tfResourceType = "aws_config_configuration_aggregator";
    return ConfigConfigurationAggregator;
}(cdktf.TerraformResource));
exports.ConfigConfigurationAggregator = ConfigConfigurationAggregator;
