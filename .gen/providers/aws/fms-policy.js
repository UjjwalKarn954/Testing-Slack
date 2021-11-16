"use strict";
// https://www.terraform.io/docs/providers/aws/r/fms_policy.html
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
exports.FmsPolicy = void 0;
var cdktf = require("cdktf");
function fmsPolicyExcludeMapToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        account: cdktf.listMapper(cdktf.stringToTerraform)(struct.account),
        orgunit: cdktf.listMapper(cdktf.stringToTerraform)(struct.orgunit)
    };
}
function fmsPolicyIncludeMapToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        account: cdktf.listMapper(cdktf.stringToTerraform)(struct.account),
        orgunit: cdktf.listMapper(cdktf.stringToTerraform)(struct.orgunit)
    };
}
function fmsPolicySecurityServicePolicyDataToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        managed_service_data: cdktf.stringToTerraform(struct.managedServiceData),
        type: cdktf.stringToTerraform(struct.type)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html aws_fms_policy}
*/
var FmsPolicy = /** @class */ (function (_super) {
    __extends(FmsPolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html aws_fms_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FmsPolicyConfig
    */
    function FmsPolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_fms_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._deleteAllPolicyResources = config.deleteAllPolicyResources;
        _this._excludeResourceTags = config.excludeResourceTags;
        _this._name = config.name;
        _this._remediationEnabled = config.remediationEnabled;
        _this._resourceTags = config.resourceTags;
        _this._resourceType = config.resourceType;
        _this._resourceTypeList = config.resourceTypeList;
        _this._excludeMap = config.excludeMap;
        _this._includeMap = config.includeMap;
        _this._securityServicePolicyData = config.securityServicePolicyData;
        return _this;
    }
    Object.defineProperty(FmsPolicy.prototype, "arn", {
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
    Object.defineProperty(FmsPolicy.prototype, "deleteAllPolicyResources", {
        get: function () {
            return this.getBooleanAttribute('delete_all_policy_resources');
        },
        set: function (value) {
            this._deleteAllPolicyResources = value;
        },
        enumerable: false,
        configurable: true
    });
    FmsPolicy.prototype.resetDeleteAllPolicyResources = function () {
        this._deleteAllPolicyResources = undefined;
    };
    Object.defineProperty(FmsPolicy.prototype, "deleteAllPolicyResourcesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deleteAllPolicyResources;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FmsPolicy.prototype, "excludeResourceTags", {
        get: function () {
            return this.getBooleanAttribute('exclude_resource_tags');
        },
        set: function (value) {
            this._excludeResourceTags = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FmsPolicy.prototype, "excludeResourceTagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._excludeResourceTags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FmsPolicy.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FmsPolicy.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FmsPolicy.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FmsPolicy.prototype, "policyUpdateToken", {
        // policy_update_token - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('policy_update_token');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FmsPolicy.prototype, "remediationEnabled", {
        get: function () {
            return this.getBooleanAttribute('remediation_enabled');
        },
        set: function (value) {
            this._remediationEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    FmsPolicy.prototype.resetRemediationEnabled = function () {
        this._remediationEnabled = undefined;
    };
    Object.defineProperty(FmsPolicy.prototype, "remediationEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._remediationEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FmsPolicy.prototype, "resourceTags", {
        get: function () {
            return this.interpolationForAttribute('resource_tags');
        },
        set: function (value) {
            this._resourceTags = value;
        },
        enumerable: false,
        configurable: true
    });
    FmsPolicy.prototype.resetResourceTags = function () {
        this._resourceTags = undefined;
    };
    Object.defineProperty(FmsPolicy.prototype, "resourceTagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceTags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FmsPolicy.prototype, "resourceType", {
        get: function () {
            return this.getStringAttribute('resource_type');
        },
        set: function (value) {
            this._resourceType = value;
        },
        enumerable: false,
        configurable: true
    });
    FmsPolicy.prototype.resetResourceType = function () {
        this._resourceType = undefined;
    };
    Object.defineProperty(FmsPolicy.prototype, "resourceTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FmsPolicy.prototype, "resourceTypeList", {
        get: function () {
            return this.getListAttribute('resource_type_list');
        },
        set: function (value) {
            this._resourceTypeList = value;
        },
        enumerable: false,
        configurable: true
    });
    FmsPolicy.prototype.resetResourceTypeList = function () {
        this._resourceTypeList = undefined;
    };
    Object.defineProperty(FmsPolicy.prototype, "resourceTypeListInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceTypeList;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FmsPolicy.prototype, "excludeMap", {
        get: function () {
            return this.interpolationForAttribute('exclude_map');
        },
        set: function (value) {
            this._excludeMap = value;
        },
        enumerable: false,
        configurable: true
    });
    FmsPolicy.prototype.resetExcludeMap = function () {
        this._excludeMap = undefined;
    };
    Object.defineProperty(FmsPolicy.prototype, "excludeMapInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._excludeMap;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FmsPolicy.prototype, "includeMap", {
        get: function () {
            return this.interpolationForAttribute('include_map');
        },
        set: function (value) {
            this._includeMap = value;
        },
        enumerable: false,
        configurable: true
    });
    FmsPolicy.prototype.resetIncludeMap = function () {
        this._includeMap = undefined;
    };
    Object.defineProperty(FmsPolicy.prototype, "includeMapInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._includeMap;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FmsPolicy.prototype, "securityServicePolicyData", {
        get: function () {
            return this.interpolationForAttribute('security_service_policy_data');
        },
        set: function (value) {
            this._securityServicePolicyData = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FmsPolicy.prototype, "securityServicePolicyDataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityServicePolicyData;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    FmsPolicy.prototype.synthesizeAttributes = function () {
        return {
            delete_all_policy_resources: cdktf.booleanToTerraform(this._deleteAllPolicyResources),
            exclude_resource_tags: cdktf.booleanToTerraform(this._excludeResourceTags),
            name: cdktf.stringToTerraform(this._name),
            remediation_enabled: cdktf.booleanToTerraform(this._remediationEnabled),
            resource_tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._resourceTags),
            resource_type: cdktf.stringToTerraform(this._resourceType),
            resource_type_list: cdktf.listMapper(cdktf.stringToTerraform)(this._resourceTypeList),
            exclude_map: cdktf.listMapper(fmsPolicyExcludeMapToTerraform)(this._excludeMap),
            include_map: cdktf.listMapper(fmsPolicyIncludeMapToTerraform)(this._includeMap),
            security_service_policy_data: cdktf.listMapper(fmsPolicySecurityServicePolicyDataToTerraform)(this._securityServicePolicyData)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    FmsPolicy.tfResourceType = "aws_fms_policy";
    return FmsPolicy;
}(cdktf.TerraformResource));
exports.FmsPolicy = FmsPolicy;
