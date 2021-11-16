"use strict";
// https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html
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
exports.DlmLifecyclePolicy = void 0;
var cdktf = require("cdktf");
function dlmLifecyclePolicyPolicyDetailsScheduleCreateRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        interval: cdktf.numberToTerraform(struct.interval),
        interval_unit: cdktf.stringToTerraform(struct.intervalUnit),
        times: cdktf.listMapper(cdktf.stringToTerraform)(struct.times)
    };
}
function dlmLifecyclePolicyPolicyDetailsScheduleRetainRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        count: cdktf.numberToTerraform(struct.count)
    };
}
function dlmLifecyclePolicyPolicyDetailsScheduleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        copy_tags: cdktf.booleanToTerraform(struct.copyTags),
        name: cdktf.stringToTerraform(struct.name),
        tags_to_add: cdktf.hashMapper(cdktf.anyToTerraform)(struct.tagsToAdd),
        create_rule: cdktf.listMapper(dlmLifecyclePolicyPolicyDetailsScheduleCreateRuleToTerraform)(struct.createRule),
        retain_rule: cdktf.listMapper(dlmLifecyclePolicyPolicyDetailsScheduleRetainRuleToTerraform)(struct.retainRule)
    };
}
function dlmLifecyclePolicyPolicyDetailsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        resource_types: cdktf.listMapper(cdktf.stringToTerraform)(struct.resourceTypes),
        target_tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct.targetTags),
        schedule: cdktf.listMapper(dlmLifecyclePolicyPolicyDetailsScheduleToTerraform)(struct.schedule)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html aws_dlm_lifecycle_policy}
*/
var DlmLifecyclePolicy = /** @class */ (function (_super) {
    __extends(DlmLifecyclePolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html aws_dlm_lifecycle_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DlmLifecyclePolicyConfig
    */
    function DlmLifecyclePolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_dlm_lifecycle_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._executionRoleArn = config.executionRoleArn;
        _this._state = config.state;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._policyDetails = config.policyDetails;
        return _this;
    }
    Object.defineProperty(DlmLifecyclePolicy.prototype, "arn", {
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
    Object.defineProperty(DlmLifecyclePolicy.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DlmLifecyclePolicy.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DlmLifecyclePolicy.prototype, "executionRoleArn", {
        get: function () {
            return this.getStringAttribute('execution_role_arn');
        },
        set: function (value) {
            this._executionRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DlmLifecyclePolicy.prototype, "executionRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._executionRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DlmLifecyclePolicy.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DlmLifecyclePolicy.prototype, "state", {
        get: function () {
            return this.getStringAttribute('state');
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    DlmLifecyclePolicy.prototype.resetState = function () {
        this._state = undefined;
    };
    Object.defineProperty(DlmLifecyclePolicy.prototype, "stateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DlmLifecyclePolicy.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DlmLifecyclePolicy.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DlmLifecyclePolicy.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DlmLifecyclePolicy.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    DlmLifecyclePolicy.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(DlmLifecyclePolicy.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DlmLifecyclePolicy.prototype, "policyDetails", {
        get: function () {
            return this.interpolationForAttribute('policy_details');
        },
        set: function (value) {
            this._policyDetails = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DlmLifecyclePolicy.prototype, "policyDetailsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policyDetails;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DlmLifecyclePolicy.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
            state: cdktf.stringToTerraform(this._state),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            policy_details: cdktf.listMapper(dlmLifecyclePolicyPolicyDetailsToTerraform)(this._policyDetails)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DlmLifecyclePolicy.tfResourceType = "aws_dlm_lifecycle_policy";
    return DlmLifecyclePolicy;
}(cdktf.TerraformResource));
exports.DlmLifecyclePolicy = DlmLifecyclePolicy;
