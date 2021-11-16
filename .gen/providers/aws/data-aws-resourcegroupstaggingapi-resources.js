"use strict";
// https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources.html
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
exports.DataAwsResourcegroupstaggingapiResources = exports.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList = exports.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails = void 0;
var cdktf = require("cdktf");
var DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails = /** @class */ (function (_super) {
    __extends(DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails, _super);
    function DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails.prototype, "complianceStatus", {
        // compliance_status - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('compliance_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails.prototype, "keysWithNoncompliantValues", {
        // keys_with_noncompliant_values - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('keys_with_noncompliant_values');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails.prototype, "nonCompliantKeys", {
        // non_compliant_keys - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('non_compliant_keys');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails;
}(cdktf.ComplexComputedList));
exports.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails = DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails;
var DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList = /** @class */ (function (_super) {
    __extends(DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList, _super);
    function DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList.prototype, "complianceDetails", {
        // compliance_details - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('compliance_details');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList.prototype, "resourceArn", {
        // resource_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('resource_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList.prototype, "tags", {
        // tags - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList;
}(cdktf.ComplexComputedList));
exports.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList = DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList;
function dataAwsResourcegroupstaggingapiResourcesTagFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources.html aws_resourcegroupstaggingapi_resources}
*/
var DataAwsResourcegroupstaggingapiResources = /** @class */ (function (_super) {
    __extends(DataAwsResourcegroupstaggingapiResources, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources.html aws_resourcegroupstaggingapi_resources} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsResourcegroupstaggingapiResourcesConfig = {}
    */
    function DataAwsResourcegroupstaggingapiResources(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_resourcegroupstaggingapi_resources',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._excludeCompliantResources = config.excludeCompliantResources;
        _this._includeComplianceDetails = config.includeComplianceDetails;
        _this._resourceArnList = config.resourceArnList;
        _this._resourceTypeFilters = config.resourceTypeFilters;
        _this._tagFilter = config.tagFilter;
        return _this;
    }
    Object.defineProperty(DataAwsResourcegroupstaggingapiResources.prototype, "excludeCompliantResources", {
        get: function () {
            return this.getBooleanAttribute('exclude_compliant_resources');
        },
        set: function (value) {
            this._excludeCompliantResources = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsResourcegroupstaggingapiResources.prototype.resetExcludeCompliantResources = function () {
        this._excludeCompliantResources = undefined;
    };
    Object.defineProperty(DataAwsResourcegroupstaggingapiResources.prototype, "excludeCompliantResourcesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._excludeCompliantResources;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsResourcegroupstaggingapiResources.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsResourcegroupstaggingapiResources.prototype, "includeComplianceDetails", {
        get: function () {
            return this.getBooleanAttribute('include_compliance_details');
        },
        set: function (value) {
            this._includeComplianceDetails = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsResourcegroupstaggingapiResources.prototype.resetIncludeComplianceDetails = function () {
        this._includeComplianceDetails = undefined;
    };
    Object.defineProperty(DataAwsResourcegroupstaggingapiResources.prototype, "includeComplianceDetailsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._includeComplianceDetails;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsResourcegroupstaggingapiResources.prototype, "resourceArnList", {
        get: function () {
            return this.getListAttribute('resource_arn_list');
        },
        set: function (value) {
            this._resourceArnList = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsResourcegroupstaggingapiResources.prototype.resetResourceArnList = function () {
        this._resourceArnList = undefined;
    };
    Object.defineProperty(DataAwsResourcegroupstaggingapiResources.prototype, "resourceArnListInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceArnList;
        },
        enumerable: false,
        configurable: true
    });
    // resource_tag_mapping_list - computed: true, optional: false, required: false
    DataAwsResourcegroupstaggingapiResources.prototype.resourceTagMappingList = function (index) {
        return new DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList(this, 'resource_tag_mapping_list', index);
    };
    Object.defineProperty(DataAwsResourcegroupstaggingapiResources.prototype, "resourceTypeFilters", {
        get: function () {
            return this.getListAttribute('resource_type_filters');
        },
        set: function (value) {
            this._resourceTypeFilters = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsResourcegroupstaggingapiResources.prototype.resetResourceTypeFilters = function () {
        this._resourceTypeFilters = undefined;
    };
    Object.defineProperty(DataAwsResourcegroupstaggingapiResources.prototype, "resourceTypeFiltersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceTypeFilters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsResourcegroupstaggingapiResources.prototype, "tagFilter", {
        get: function () {
            return this.interpolationForAttribute('tag_filter');
        },
        set: function (value) {
            this._tagFilter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsResourcegroupstaggingapiResources.prototype.resetTagFilter = function () {
        this._tagFilter = undefined;
    };
    Object.defineProperty(DataAwsResourcegroupstaggingapiResources.prototype, "tagFilterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagFilter;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsResourcegroupstaggingapiResources.prototype.synthesizeAttributes = function () {
        return {
            exclude_compliant_resources: cdktf.booleanToTerraform(this._excludeCompliantResources),
            include_compliance_details: cdktf.booleanToTerraform(this._includeComplianceDetails),
            resource_arn_list: cdktf.listMapper(cdktf.stringToTerraform)(this._resourceArnList),
            resource_type_filters: cdktf.listMapper(cdktf.stringToTerraform)(this._resourceTypeFilters),
            tag_filter: cdktf.listMapper(dataAwsResourcegroupstaggingapiResourcesTagFilterToTerraform)(this._tagFilter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsResourcegroupstaggingapiResources.tfResourceType = "aws_resourcegroupstaggingapi_resources";
    return DataAwsResourcegroupstaggingapiResources;
}(cdktf.TerraformDataSource));
exports.DataAwsResourcegroupstaggingapiResources = DataAwsResourcegroupstaggingapiResources;
