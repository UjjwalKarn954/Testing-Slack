"use strict";
// https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control.html
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
exports.SecurityhubStandardsControl = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control.html aws_securityhub_standards_control}
*/
var SecurityhubStandardsControl = /** @class */ (function (_super) {
    __extends(SecurityhubStandardsControl, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control.html aws_securityhub_standards_control} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecurityhubStandardsControlConfig
    */
    function SecurityhubStandardsControl(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_securityhub_standards_control',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._controlStatus = config.controlStatus;
        _this._disabledReason = config.disabledReason;
        _this._standardsControlArn = config.standardsControlArn;
        return _this;
    }
    Object.defineProperty(SecurityhubStandardsControl.prototype, "controlId", {
        // ==========
        // ATTRIBUTES
        // ==========
        // control_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('control_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityhubStandardsControl.prototype, "controlStatus", {
        get: function () {
            return this.getStringAttribute('control_status');
        },
        set: function (value) {
            this._controlStatus = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityhubStandardsControl.prototype, "controlStatusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._controlStatus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityhubStandardsControl.prototype, "controlStatusUpdatedAt", {
        // control_status_updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('control_status_updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityhubStandardsControl.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityhubStandardsControl.prototype, "disabledReason", {
        get: function () {
            return this.getStringAttribute('disabled_reason');
        },
        set: function (value) {
            this._disabledReason = value;
        },
        enumerable: false,
        configurable: true
    });
    SecurityhubStandardsControl.prototype.resetDisabledReason = function () {
        this._disabledReason = undefined;
    };
    Object.defineProperty(SecurityhubStandardsControl.prototype, "disabledReasonInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disabledReason;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityhubStandardsControl.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityhubStandardsControl.prototype, "relatedRequirements", {
        // related_requirements - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('related_requirements');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityhubStandardsControl.prototype, "remediationUrl", {
        // remediation_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('remediation_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityhubStandardsControl.prototype, "severityRating", {
        // severity_rating - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('severity_rating');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityhubStandardsControl.prototype, "standardsControlArn", {
        get: function () {
            return this.getStringAttribute('standards_control_arn');
        },
        set: function (value) {
            this._standardsControlArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityhubStandardsControl.prototype, "standardsControlArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._standardsControlArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityhubStandardsControl.prototype, "title", {
        // title - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('title');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SecurityhubStandardsControl.prototype.synthesizeAttributes = function () {
        return {
            control_status: cdktf.stringToTerraform(this._controlStatus),
            disabled_reason: cdktf.stringToTerraform(this._disabledReason),
            standards_control_arn: cdktf.stringToTerraform(this._standardsControlArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SecurityhubStandardsControl.tfResourceType = "aws_securityhub_standards_control";
    return SecurityhubStandardsControl;
}(cdktf.TerraformResource));
exports.SecurityhubStandardsControl = SecurityhubStandardsControl;
