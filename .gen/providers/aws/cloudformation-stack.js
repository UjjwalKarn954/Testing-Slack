"use strict";
// https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html
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
exports.CloudformationStack = void 0;
var cdktf = require("cdktf");
function cloudformationStackTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"]),
        update: cdktf.stringToTerraform(struct.update)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html aws_cloudformation_stack}
*/
var CloudformationStack = /** @class */ (function (_super) {
    __extends(CloudformationStack, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html aws_cloudformation_stack} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudformationStackConfig
    */
    function CloudformationStack(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudformation_stack',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._capabilities = config.capabilities;
        _this._disableRollback = config.disableRollback;
        _this._iamRoleArn = config.iamRoleArn;
        _this._name = config.name;
        _this._notificationArns = config.notificationArns;
        _this._onFailure = config.onFailure;
        _this._parameters = config.parameters;
        _this._policyBody = config.policyBody;
        _this._policyUrl = config.policyUrl;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._templateBody = config.templateBody;
        _this._templateUrl = config.templateUrl;
        _this._timeoutInMinutes = config.timeoutInMinutes;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(CloudformationStack.prototype, "capabilities", {
        get: function () {
            return this.getListAttribute('capabilities');
        },
        set: function (value) {
            this._capabilities = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudformationStack.prototype.resetCapabilities = function () {
        this._capabilities = undefined;
    };
    Object.defineProperty(CloudformationStack.prototype, "capabilitiesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._capabilities;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStack.prototype, "disableRollback", {
        get: function () {
            return this.getBooleanAttribute('disable_rollback');
        },
        set: function (value) {
            this._disableRollback = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudformationStack.prototype.resetDisableRollback = function () {
        this._disableRollback = undefined;
    };
    Object.defineProperty(CloudformationStack.prototype, "disableRollbackInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disableRollback;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStack.prototype, "iamRoleArn", {
        get: function () {
            return this.getStringAttribute('iam_role_arn');
        },
        set: function (value) {
            this._iamRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudformationStack.prototype.resetIamRoleArn = function () {
        this._iamRoleArn = undefined;
    };
    Object.defineProperty(CloudformationStack.prototype, "iamRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._iamRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStack.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStack.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStack.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStack.prototype, "notificationArns", {
        get: function () {
            return this.getListAttribute('notification_arns');
        },
        set: function (value) {
            this._notificationArns = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudformationStack.prototype.resetNotificationArns = function () {
        this._notificationArns = undefined;
    };
    Object.defineProperty(CloudformationStack.prototype, "notificationArnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._notificationArns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStack.prototype, "onFailure", {
        get: function () {
            return this.getStringAttribute('on_failure');
        },
        set: function (value) {
            this._onFailure = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudformationStack.prototype.resetOnFailure = function () {
        this._onFailure = undefined;
    };
    Object.defineProperty(CloudformationStack.prototype, "onFailureInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._onFailure;
        },
        enumerable: false,
        configurable: true
    });
    // outputs - computed: true, optional: false, required: false
    CloudformationStack.prototype.outputs = function (key) {
        return new cdktf.StringMap(this, 'outputs').lookup(key);
    };
    Object.defineProperty(CloudformationStack.prototype, "parameters", {
        get: function () {
            return this.interpolationForAttribute('parameters'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._parameters = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudformationStack.prototype.resetParameters = function () {
        this._parameters = undefined;
    };
    Object.defineProperty(CloudformationStack.prototype, "parametersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parameters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStack.prototype, "policyBody", {
        get: function () {
            return this.getStringAttribute('policy_body');
        },
        set: function (value) {
            this._policyBody = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudformationStack.prototype.resetPolicyBody = function () {
        this._policyBody = undefined;
    };
    Object.defineProperty(CloudformationStack.prototype, "policyBodyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policyBody;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStack.prototype, "policyUrl", {
        get: function () {
            return this.getStringAttribute('policy_url');
        },
        set: function (value) {
            this._policyUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudformationStack.prototype.resetPolicyUrl = function () {
        this._policyUrl = undefined;
    };
    Object.defineProperty(CloudformationStack.prototype, "policyUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policyUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStack.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudformationStack.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(CloudformationStack.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStack.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudformationStack.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(CloudformationStack.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStack.prototype, "templateBody", {
        get: function () {
            return this.getStringAttribute('template_body');
        },
        set: function (value) {
            this._templateBody = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudformationStack.prototype.resetTemplateBody = function () {
        this._templateBody = undefined;
    };
    Object.defineProperty(CloudformationStack.prototype, "templateBodyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._templateBody;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStack.prototype, "templateUrl", {
        get: function () {
            return this.getStringAttribute('template_url');
        },
        set: function (value) {
            this._templateUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudformationStack.prototype.resetTemplateUrl = function () {
        this._templateUrl = undefined;
    };
    Object.defineProperty(CloudformationStack.prototype, "templateUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._templateUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStack.prototype, "timeoutInMinutes", {
        get: function () {
            return this.getNumberAttribute('timeout_in_minutes');
        },
        set: function (value) {
            this._timeoutInMinutes = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudformationStack.prototype.resetTimeoutInMinutes = function () {
        this._timeoutInMinutes = undefined;
    };
    Object.defineProperty(CloudformationStack.prototype, "timeoutInMinutesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeoutInMinutes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStack.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudformationStack.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(CloudformationStack.prototype, "timeoutsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeouts;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CloudformationStack.prototype.synthesizeAttributes = function () {
        return {
            capabilities: cdktf.listMapper(cdktf.stringToTerraform)(this._capabilities),
            disable_rollback: cdktf.booleanToTerraform(this._disableRollback),
            iam_role_arn: cdktf.stringToTerraform(this._iamRoleArn),
            name: cdktf.stringToTerraform(this._name),
            notification_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._notificationArns),
            on_failure: cdktf.stringToTerraform(this._onFailure),
            parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
            policy_body: cdktf.stringToTerraform(this._policyBody),
            policy_url: cdktf.stringToTerraform(this._policyUrl),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            template_body: cdktf.stringToTerraform(this._templateBody),
            template_url: cdktf.stringToTerraform(this._templateUrl),
            timeout_in_minutes: cdktf.numberToTerraform(this._timeoutInMinutes),
            timeouts: cloudformationStackTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CloudformationStack.tfResourceType = "aws_cloudformation_stack";
    return CloudformationStack;
}(cdktf.TerraformResource));
exports.CloudformationStack = CloudformationStack;
