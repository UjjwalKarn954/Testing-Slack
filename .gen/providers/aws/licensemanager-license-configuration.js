"use strict";
// https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration.html
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
exports.LicensemanagerLicenseConfiguration = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration.html aws_licensemanager_license_configuration}
*/
var LicensemanagerLicenseConfiguration = /** @class */ (function (_super) {
    __extends(LicensemanagerLicenseConfiguration, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration.html aws_licensemanager_license_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LicensemanagerLicenseConfigurationConfig
    */
    function LicensemanagerLicenseConfiguration(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_licensemanager_license_configuration',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._licenseCount = config.licenseCount;
        _this._licenseCountHardLimit = config.licenseCountHardLimit;
        _this._licenseCountingType = config.licenseCountingType;
        _this._licenseRules = config.licenseRules;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(LicensemanagerLicenseConfiguration.prototype, "arn", {
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
    Object.defineProperty(LicensemanagerLicenseConfiguration.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    LicensemanagerLicenseConfiguration.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(LicensemanagerLicenseConfiguration.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LicensemanagerLicenseConfiguration.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LicensemanagerLicenseConfiguration.prototype, "licenseCount", {
        get: function () {
            return this.getNumberAttribute('license_count');
        },
        set: function (value) {
            this._licenseCount = value;
        },
        enumerable: false,
        configurable: true
    });
    LicensemanagerLicenseConfiguration.prototype.resetLicenseCount = function () {
        this._licenseCount = undefined;
    };
    Object.defineProperty(LicensemanagerLicenseConfiguration.prototype, "licenseCountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._licenseCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LicensemanagerLicenseConfiguration.prototype, "licenseCountHardLimit", {
        get: function () {
            return this.getBooleanAttribute('license_count_hard_limit');
        },
        set: function (value) {
            this._licenseCountHardLimit = value;
        },
        enumerable: false,
        configurable: true
    });
    LicensemanagerLicenseConfiguration.prototype.resetLicenseCountHardLimit = function () {
        this._licenseCountHardLimit = undefined;
    };
    Object.defineProperty(LicensemanagerLicenseConfiguration.prototype, "licenseCountHardLimitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._licenseCountHardLimit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LicensemanagerLicenseConfiguration.prototype, "licenseCountingType", {
        get: function () {
            return this.getStringAttribute('license_counting_type');
        },
        set: function (value) {
            this._licenseCountingType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LicensemanagerLicenseConfiguration.prototype, "licenseCountingTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._licenseCountingType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LicensemanagerLicenseConfiguration.prototype, "licenseRules", {
        get: function () {
            return this.getListAttribute('license_rules');
        },
        set: function (value) {
            this._licenseRules = value;
        },
        enumerable: false,
        configurable: true
    });
    LicensemanagerLicenseConfiguration.prototype.resetLicenseRules = function () {
        this._licenseRules = undefined;
    };
    Object.defineProperty(LicensemanagerLicenseConfiguration.prototype, "licenseRulesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._licenseRules;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LicensemanagerLicenseConfiguration.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LicensemanagerLicenseConfiguration.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LicensemanagerLicenseConfiguration.prototype, "ownerAccountId", {
        // owner_account_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_account_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LicensemanagerLicenseConfiguration.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    LicensemanagerLicenseConfiguration.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(LicensemanagerLicenseConfiguration.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LicensemanagerLicenseConfiguration.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    LicensemanagerLicenseConfiguration.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(LicensemanagerLicenseConfiguration.prototype, "tagsAllInput", {
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
    LicensemanagerLicenseConfiguration.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            license_count: cdktf.numberToTerraform(this._licenseCount),
            license_count_hard_limit: cdktf.booleanToTerraform(this._licenseCountHardLimit),
            license_counting_type: cdktf.stringToTerraform(this._licenseCountingType),
            license_rules: cdktf.listMapper(cdktf.stringToTerraform)(this._licenseRules),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    LicensemanagerLicenseConfiguration.tfResourceType = "aws_licensemanager_license_configuration";
    return LicensemanagerLicenseConfiguration;
}(cdktf.TerraformResource));
exports.LicensemanagerLicenseConfiguration = LicensemanagerLicenseConfiguration;
