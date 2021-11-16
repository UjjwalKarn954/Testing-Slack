"use strict";
// https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configuration.html
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
exports.DataAwsImagebuilderDistributionConfiguration = exports.DataAwsImagebuilderDistributionConfigurationDistribution = exports.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration = exports.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission = void 0;
var cdktf = require("cdktf");
var DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission = /** @class */ (function (_super) {
    __extends(DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission, _super);
    function DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission.prototype, "userGroups", {
        // user_groups - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('user_groups');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission.prototype, "userIds", {
        // user_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('user_ids');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission;
}(cdktf.ComplexComputedList));
exports.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission = DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission;
var DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration = /** @class */ (function (_super) {
    __extends(DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration, _super);
    function DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration.prototype, "amiTags", {
        // ami_tags - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('ami_tags');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration.prototype, "kmsKeyId", {
        // kms_key_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration.prototype, "launchPermission", {
        // launch_permission - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('launch_permission');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration.prototype, "targetAccountIds", {
        // target_account_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('target_account_ids');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration;
}(cdktf.ComplexComputedList));
exports.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration = DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration;
var DataAwsImagebuilderDistributionConfigurationDistribution = /** @class */ (function (_super) {
    __extends(DataAwsImagebuilderDistributionConfigurationDistribution, _super);
    function DataAwsImagebuilderDistributionConfigurationDistribution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsImagebuilderDistributionConfigurationDistribution.prototype, "amiDistributionConfiguration", {
        // ami_distribution_configuration - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('ami_distribution_configuration');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderDistributionConfigurationDistribution.prototype, "licenseConfigurationArns", {
        // license_configuration_arns - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('license_configuration_arns');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderDistributionConfigurationDistribution.prototype, "region", {
        // region - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('region');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsImagebuilderDistributionConfigurationDistribution;
}(cdktf.ComplexComputedList));
exports.DataAwsImagebuilderDistributionConfigurationDistribution = DataAwsImagebuilderDistributionConfigurationDistribution;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configuration.html aws_imagebuilder_distribution_configuration}
*/
var DataAwsImagebuilderDistributionConfiguration = /** @class */ (function (_super) {
    __extends(DataAwsImagebuilderDistributionConfiguration, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configuration.html aws_imagebuilder_distribution_configuration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsImagebuilderDistributionConfigurationConfig
    */
    function DataAwsImagebuilderDistributionConfiguration(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_imagebuilder_distribution_configuration',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._arn = config.arn;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsImagebuilderDistributionConfiguration.prototype, "arn", {
        get: function () {
            return this.getStringAttribute('arn');
        },
        set: function (value) {
            this._arn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderDistributionConfiguration.prototype, "arnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._arn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderDistributionConfiguration.prototype, "dateCreated", {
        // date_created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('date_created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderDistributionConfiguration.prototype, "dateUpdated", {
        // date_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('date_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderDistributionConfiguration.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    // distribution - computed: true, optional: false, required: false
    DataAwsImagebuilderDistributionConfiguration.prototype.distribution = function (index) {
        return new DataAwsImagebuilderDistributionConfigurationDistribution(this, 'distribution', index);
    };
    Object.defineProperty(DataAwsImagebuilderDistributionConfiguration.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderDistributionConfiguration.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderDistributionConfiguration.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsImagebuilderDistributionConfiguration.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsImagebuilderDistributionConfiguration.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsImagebuilderDistributionConfiguration.prototype.synthesizeAttributes = function () {
        return {
            arn: cdktf.stringToTerraform(this._arn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsImagebuilderDistributionConfiguration.tfResourceType = "aws_imagebuilder_distribution_configuration";
    return DataAwsImagebuilderDistributionConfiguration;
}(cdktf.TerraformDataSource));
exports.DataAwsImagebuilderDistributionConfiguration = DataAwsImagebuilderDistributionConfiguration;
