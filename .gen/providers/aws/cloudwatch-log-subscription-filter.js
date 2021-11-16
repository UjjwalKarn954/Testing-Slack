"use strict";
// https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter.html
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
exports.CloudwatchLogSubscriptionFilter = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter.html aws_cloudwatch_log_subscription_filter}
*/
var CloudwatchLogSubscriptionFilter = /** @class */ (function (_super) {
    __extends(CloudwatchLogSubscriptionFilter, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter.html aws_cloudwatch_log_subscription_filter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchLogSubscriptionFilterConfig
    */
    function CloudwatchLogSubscriptionFilter(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudwatch_log_subscription_filter',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._destinationArn = config.destinationArn;
        _this._distribution = config.distribution;
        _this._filterPattern = config.filterPattern;
        _this._logGroupName = config.logGroupName;
        _this._name = config.name;
        _this._roleArn = config.roleArn;
        return _this;
    }
    Object.defineProperty(CloudwatchLogSubscriptionFilter.prototype, "destinationArn", {
        get: function () {
            return this.getStringAttribute('destination_arn');
        },
        set: function (value) {
            this._destinationArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchLogSubscriptionFilter.prototype, "destinationArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destinationArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchLogSubscriptionFilter.prototype, "distribution", {
        get: function () {
            return this.getStringAttribute('distribution');
        },
        set: function (value) {
            this._distribution = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchLogSubscriptionFilter.prototype.resetDistribution = function () {
        this._distribution = undefined;
    };
    Object.defineProperty(CloudwatchLogSubscriptionFilter.prototype, "distributionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._distribution;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchLogSubscriptionFilter.prototype, "filterPattern", {
        get: function () {
            return this.getStringAttribute('filter_pattern');
        },
        set: function (value) {
            this._filterPattern = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchLogSubscriptionFilter.prototype, "filterPatternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filterPattern;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchLogSubscriptionFilter.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchLogSubscriptionFilter.prototype, "logGroupName", {
        get: function () {
            return this.getStringAttribute('log_group_name');
        },
        set: function (value) {
            this._logGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchLogSubscriptionFilter.prototype, "logGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchLogSubscriptionFilter.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchLogSubscriptionFilter.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchLogSubscriptionFilter.prototype, "roleArn", {
        get: function () {
            return this.getStringAttribute('role_arn');
        },
        set: function (value) {
            this._roleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchLogSubscriptionFilter.prototype.resetRoleArn = function () {
        this._roleArn = undefined;
    };
    Object.defineProperty(CloudwatchLogSubscriptionFilter.prototype, "roleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleArn;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CloudwatchLogSubscriptionFilter.prototype.synthesizeAttributes = function () {
        return {
            destination_arn: cdktf.stringToTerraform(this._destinationArn),
            distribution: cdktf.stringToTerraform(this._distribution),
            filter_pattern: cdktf.stringToTerraform(this._filterPattern),
            log_group_name: cdktf.stringToTerraform(this._logGroupName),
            name: cdktf.stringToTerraform(this._name),
            role_arn: cdktf.stringToTerraform(this._roleArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CloudwatchLogSubscriptionFilter.tfResourceType = "aws_cloudwatch_log_subscription_filter";
    return CloudwatchLogSubscriptionFilter;
}(cdktf.TerraformResource));
exports.CloudwatchLogSubscriptionFilter = CloudwatchLogSubscriptionFilter;
