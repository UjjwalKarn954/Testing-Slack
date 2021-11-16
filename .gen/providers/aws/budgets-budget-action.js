"use strict";
// https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html
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
exports.BudgetsBudgetAction = void 0;
var cdktf = require("cdktf");
function budgetsBudgetActionActionThresholdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action_threshold_type: cdktf.stringToTerraform(struct.actionThresholdType),
        action_threshold_value: cdktf.numberToTerraform(struct.actionThresholdValue)
    };
}
function budgetsBudgetActionDefinitionIamActionDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        groups: cdktf.listMapper(cdktf.stringToTerraform)(struct.groups),
        policy_arn: cdktf.stringToTerraform(struct.policyArn),
        roles: cdktf.listMapper(cdktf.stringToTerraform)(struct.roles),
        users: cdktf.listMapper(cdktf.stringToTerraform)(struct.users)
    };
}
function budgetsBudgetActionDefinitionScpActionDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        policy_id: cdktf.stringToTerraform(struct.policyId),
        target_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.targetIds)
    };
}
function budgetsBudgetActionDefinitionSsmActionDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action_sub_type: cdktf.stringToTerraform(struct.actionSubType),
        instance_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.instanceIds),
        region: cdktf.stringToTerraform(struct.region)
    };
}
function budgetsBudgetActionDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        iam_action_definition: cdktf.listMapper(budgetsBudgetActionDefinitionIamActionDefinitionToTerraform)(struct.iamActionDefinition),
        scp_action_definition: cdktf.listMapper(budgetsBudgetActionDefinitionScpActionDefinitionToTerraform)(struct.scpActionDefinition),
        ssm_action_definition: cdktf.listMapper(budgetsBudgetActionDefinitionSsmActionDefinitionToTerraform)(struct.ssmActionDefinition)
    };
}
function budgetsBudgetActionSubscriberToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        address: cdktf.stringToTerraform(struct.address),
        subscription_type: cdktf.stringToTerraform(struct.subscriptionType)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html aws_budgets_budget_action}
*/
var BudgetsBudgetAction = /** @class */ (function (_super) {
    __extends(BudgetsBudgetAction, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html aws_budgets_budget_action} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BudgetsBudgetActionConfig
    */
    function BudgetsBudgetAction(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_budgets_budget_action',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._accountId = config.accountId;
        _this._actionType = config.actionType;
        _this._approvalModel = config.approvalModel;
        _this._budgetName = config.budgetName;
        _this._executionRoleArn = config.executionRoleArn;
        _this._notificationType = config.notificationType;
        _this._actionThreshold = config.actionThreshold;
        _this._definition = config.definition;
        _this._subscriber = config.subscriber;
        return _this;
    }
    Object.defineProperty(BudgetsBudgetAction.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    BudgetsBudgetAction.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(BudgetsBudgetAction.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudgetAction.prototype, "actionId", {
        // action_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('action_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudgetAction.prototype, "actionType", {
        get: function () {
            return this.getStringAttribute('action_type');
        },
        set: function (value) {
            this._actionType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudgetAction.prototype, "actionTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._actionType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudgetAction.prototype, "approvalModel", {
        get: function () {
            return this.getStringAttribute('approval_model');
        },
        set: function (value) {
            this._approvalModel = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudgetAction.prototype, "approvalModelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._approvalModel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudgetAction.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudgetAction.prototype, "budgetName", {
        get: function () {
            return this.getStringAttribute('budget_name');
        },
        set: function (value) {
            this._budgetName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudgetAction.prototype, "budgetNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._budgetName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudgetAction.prototype, "executionRoleArn", {
        get: function () {
            return this.getStringAttribute('execution_role_arn');
        },
        set: function (value) {
            this._executionRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudgetAction.prototype, "executionRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._executionRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudgetAction.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudgetAction.prototype, "notificationType", {
        get: function () {
            return this.getStringAttribute('notification_type');
        },
        set: function (value) {
            this._notificationType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudgetAction.prototype, "notificationTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._notificationType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudgetAction.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudgetAction.prototype, "actionThreshold", {
        get: function () {
            return this.interpolationForAttribute('action_threshold');
        },
        set: function (value) {
            this._actionThreshold = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudgetAction.prototype, "actionThresholdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._actionThreshold;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudgetAction.prototype, "definition", {
        get: function () {
            return this.interpolationForAttribute('definition');
        },
        set: function (value) {
            this._definition = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudgetAction.prototype, "definitionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._definition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudgetAction.prototype, "subscriber", {
        get: function () {
            return this.interpolationForAttribute('subscriber');
        },
        set: function (value) {
            this._subscriber = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudgetAction.prototype, "subscriberInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subscriber;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    BudgetsBudgetAction.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            action_type: cdktf.stringToTerraform(this._actionType),
            approval_model: cdktf.stringToTerraform(this._approvalModel),
            budget_name: cdktf.stringToTerraform(this._budgetName),
            execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
            notification_type: cdktf.stringToTerraform(this._notificationType),
            action_threshold: cdktf.listMapper(budgetsBudgetActionActionThresholdToTerraform)(this._actionThreshold),
            definition: cdktf.listMapper(budgetsBudgetActionDefinitionToTerraform)(this._definition),
            subscriber: cdktf.listMapper(budgetsBudgetActionSubscriberToTerraform)(this._subscriber)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    BudgetsBudgetAction.tfResourceType = "aws_budgets_budget_action";
    return BudgetsBudgetAction;
}(cdktf.TerraformResource));
exports.BudgetsBudgetAction = BudgetsBudgetAction;
