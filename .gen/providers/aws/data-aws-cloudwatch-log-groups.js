"use strict";
// https://www.terraform.io/docs/providers/aws/d/cloudwatch_log_groups.html
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
exports.DataAwsCloudwatchLogGroups = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_log_groups.html aws_cloudwatch_log_groups}
*/
var DataAwsCloudwatchLogGroups = /** @class */ (function (_super) {
    __extends(DataAwsCloudwatchLogGroups, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_log_groups.html aws_cloudwatch_log_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudwatchLogGroupsConfig
    */
    function DataAwsCloudwatchLogGroups(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudwatch_log_groups',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._logGroupNamePrefix = config.logGroupNamePrefix;
        return _this;
    }
    Object.defineProperty(DataAwsCloudwatchLogGroups.prototype, "arns", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arns - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('arns');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudwatchLogGroups.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudwatchLogGroups.prototype, "logGroupNamePrefix", {
        get: function () {
            return this.getStringAttribute('log_group_name_prefix');
        },
        set: function (value) {
            this._logGroupNamePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudwatchLogGroups.prototype, "logGroupNamePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logGroupNamePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudwatchLogGroups.prototype, "logGroupNames", {
        // log_group_names - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('log_group_names');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsCloudwatchLogGroups.prototype.synthesizeAttributes = function () {
        return {
            log_group_name_prefix: cdktf.stringToTerraform(this._logGroupNamePrefix)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsCloudwatchLogGroups.tfResourceType = "aws_cloudwatch_log_groups";
    return DataAwsCloudwatchLogGroups;
}(cdktf.TerraformDataSource));
exports.DataAwsCloudwatchLogGroups = DataAwsCloudwatchLogGroups;
