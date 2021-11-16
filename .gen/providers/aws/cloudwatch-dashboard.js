"use strict";
// https://www.terraform.io/docs/providers/aws/r/cloudwatch_dashboard.html
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
exports.CloudwatchDashboard = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_dashboard.html aws_cloudwatch_dashboard}
*/
var CloudwatchDashboard = /** @class */ (function (_super) {
    __extends(CloudwatchDashboard, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_dashboard.html aws_cloudwatch_dashboard} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchDashboardConfig
    */
    function CloudwatchDashboard(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudwatch_dashboard',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._dashboardBody = config.dashboardBody;
        _this._dashboardName = config.dashboardName;
        return _this;
    }
    Object.defineProperty(CloudwatchDashboard.prototype, "dashboardArn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // dashboard_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dashboard_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchDashboard.prototype, "dashboardBody", {
        get: function () {
            return this.getStringAttribute('dashboard_body');
        },
        set: function (value) {
            this._dashboardBody = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchDashboard.prototype, "dashboardBodyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dashboardBody;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchDashboard.prototype, "dashboardName", {
        get: function () {
            return this.getStringAttribute('dashboard_name');
        },
        set: function (value) {
            this._dashboardName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchDashboard.prototype, "dashboardNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dashboardName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchDashboard.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CloudwatchDashboard.prototype.synthesizeAttributes = function () {
        return {
            dashboard_body: cdktf.stringToTerraform(this._dashboardBody),
            dashboard_name: cdktf.stringToTerraform(this._dashboardName)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CloudwatchDashboard.tfResourceType = "aws_cloudwatch_dashboard";
    return CloudwatchDashboard;
}(cdktf.TerraformResource));
exports.CloudwatchDashboard = CloudwatchDashboard;
