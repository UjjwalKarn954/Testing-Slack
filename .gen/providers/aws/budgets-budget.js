"use strict";
// https://www.terraform.io/docs/providers/aws/r/budgets_budget.html
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
exports.BudgetsBudget = void 0;
var cdktf = require("cdktf");
function budgetsBudgetCostFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
function budgetsBudgetCostTypesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        include_credit: cdktf.booleanToTerraform(struct.includeCredit),
        include_discount: cdktf.booleanToTerraform(struct.includeDiscount),
        include_other_subscription: cdktf.booleanToTerraform(struct.includeOtherSubscription),
        include_recurring: cdktf.booleanToTerraform(struct.includeRecurring),
        include_refund: cdktf.booleanToTerraform(struct.includeRefund),
        include_subscription: cdktf.booleanToTerraform(struct.includeSubscription),
        include_support: cdktf.booleanToTerraform(struct.includeSupport),
        include_tax: cdktf.booleanToTerraform(struct.includeTax),
        include_upfront: cdktf.booleanToTerraform(struct.includeUpfront),
        use_amortized: cdktf.booleanToTerraform(struct.useAmortized),
        use_blended: cdktf.booleanToTerraform(struct.useBlended)
    };
}
function budgetsBudgetNotificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison_operator: cdktf.stringToTerraform(struct.comparisonOperator),
        notification_type: cdktf.stringToTerraform(struct.notificationType),
        subscriber_email_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct.subscriberEmailAddresses),
        subscriber_sns_topic_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.subscriberSnsTopicArns),
        threshold: cdktf.numberToTerraform(struct.threshold),
        threshold_type: cdktf.stringToTerraform(struct.thresholdType)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html aws_budgets_budget}
*/
var BudgetsBudget = /** @class */ (function (_super) {
    __extends(BudgetsBudget, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html aws_budgets_budget} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BudgetsBudgetConfig
    */
    function BudgetsBudget(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_budgets_budget',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._accountId = config.accountId;
        _this._budgetType = config.budgetType;
        _this._costFilters = config.costFilters;
        _this._limitAmount = config.limitAmount;
        _this._limitUnit = config.limitUnit;
        _this._name = config.name;
        _this._namePrefix = config.namePrefix;
        _this._timePeriodEnd = config.timePeriodEnd;
        _this._timePeriodStart = config.timePeriodStart;
        _this._timeUnit = config.timeUnit;
        _this._costFilter = config.costFilter;
        _this._costTypes = config.costTypes;
        _this._notification = config.notification;
        return _this;
    }
    Object.defineProperty(BudgetsBudget.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    BudgetsBudget.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(BudgetsBudget.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudget.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudget.prototype, "budgetType", {
        get: function () {
            return this.getStringAttribute('budget_type');
        },
        set: function (value) {
            this._budgetType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudget.prototype, "budgetTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._budgetType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudget.prototype, "costFilters", {
        get: function () {
            return this.interpolationForAttribute('cost_filters'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._costFilters = value;
        },
        enumerable: false,
        configurable: true
    });
    BudgetsBudget.prototype.resetCostFilters = function () {
        this._costFilters = undefined;
    };
    Object.defineProperty(BudgetsBudget.prototype, "costFiltersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._costFilters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudget.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudget.prototype, "limitAmount", {
        get: function () {
            return this.getStringAttribute('limit_amount');
        },
        set: function (value) {
            this._limitAmount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudget.prototype, "limitAmountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._limitAmount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudget.prototype, "limitUnit", {
        get: function () {
            return this.getStringAttribute('limit_unit');
        },
        set: function (value) {
            this._limitUnit = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudget.prototype, "limitUnitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._limitUnit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudget.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    BudgetsBudget.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(BudgetsBudget.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudget.prototype, "namePrefix", {
        get: function () {
            return this.getStringAttribute('name_prefix');
        },
        set: function (value) {
            this._namePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    BudgetsBudget.prototype.resetNamePrefix = function () {
        this._namePrefix = undefined;
    };
    Object.defineProperty(BudgetsBudget.prototype, "namePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudget.prototype, "timePeriodEnd", {
        get: function () {
            return this.getStringAttribute('time_period_end');
        },
        set: function (value) {
            this._timePeriodEnd = value;
        },
        enumerable: false,
        configurable: true
    });
    BudgetsBudget.prototype.resetTimePeriodEnd = function () {
        this._timePeriodEnd = undefined;
    };
    Object.defineProperty(BudgetsBudget.prototype, "timePeriodEndInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timePeriodEnd;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudget.prototype, "timePeriodStart", {
        get: function () {
            return this.getStringAttribute('time_period_start');
        },
        set: function (value) {
            this._timePeriodStart = value;
        },
        enumerable: false,
        configurable: true
    });
    BudgetsBudget.prototype.resetTimePeriodStart = function () {
        this._timePeriodStart = undefined;
    };
    Object.defineProperty(BudgetsBudget.prototype, "timePeriodStartInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timePeriodStart;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudget.prototype, "timeUnit", {
        get: function () {
            return this.getStringAttribute('time_unit');
        },
        set: function (value) {
            this._timeUnit = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudget.prototype, "timeUnitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeUnit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudget.prototype, "costFilter", {
        get: function () {
            return this.interpolationForAttribute('cost_filter');
        },
        set: function (value) {
            this._costFilter = value;
        },
        enumerable: false,
        configurable: true
    });
    BudgetsBudget.prototype.resetCostFilter = function () {
        this._costFilter = undefined;
    };
    Object.defineProperty(BudgetsBudget.prototype, "costFilterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._costFilter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudget.prototype, "costTypes", {
        get: function () {
            return this.interpolationForAttribute('cost_types');
        },
        set: function (value) {
            this._costTypes = value;
        },
        enumerable: false,
        configurable: true
    });
    BudgetsBudget.prototype.resetCostTypes = function () {
        this._costTypes = undefined;
    };
    Object.defineProperty(BudgetsBudget.prototype, "costTypesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._costTypes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BudgetsBudget.prototype, "notification", {
        get: function () {
            return this.interpolationForAttribute('notification');
        },
        set: function (value) {
            this._notification = value;
        },
        enumerable: false,
        configurable: true
    });
    BudgetsBudget.prototype.resetNotification = function () {
        this._notification = undefined;
    };
    Object.defineProperty(BudgetsBudget.prototype, "notificationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._notification;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    BudgetsBudget.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            budget_type: cdktf.stringToTerraform(this._budgetType),
            cost_filters: cdktf.hashMapper(cdktf.anyToTerraform)(this._costFilters),
            limit_amount: cdktf.stringToTerraform(this._limitAmount),
            limit_unit: cdktf.stringToTerraform(this._limitUnit),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            time_period_end: cdktf.stringToTerraform(this._timePeriodEnd),
            time_period_start: cdktf.stringToTerraform(this._timePeriodStart),
            time_unit: cdktf.stringToTerraform(this._timeUnit),
            cost_filter: cdktf.listMapper(budgetsBudgetCostFilterToTerraform)(this._costFilter),
            cost_types: cdktf.listMapper(budgetsBudgetCostTypesToTerraform)(this._costTypes),
            notification: cdktf.listMapper(budgetsBudgetNotificationToTerraform)(this._notification)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    BudgetsBudget.tfResourceType = "aws_budgets_budget";
    return BudgetsBudget;
}(cdktf.TerraformResource));
exports.BudgetsBudget = BudgetsBudget;
