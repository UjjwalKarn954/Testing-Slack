"use strict";
// https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html
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
exports.CloudwatchEventPermission = void 0;
var cdktf = require("cdktf");
function cloudwatchEventPermissionConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.stringToTerraform(struct.value)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html aws_cloudwatch_event_permission}
*/
var CloudwatchEventPermission = /** @class */ (function (_super) {
    __extends(CloudwatchEventPermission, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html aws_cloudwatch_event_permission} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchEventPermissionConfig
    */
    function CloudwatchEventPermission(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudwatch_event_permission',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._action = config.action;
        _this._eventBusName = config.eventBusName;
        _this._principal = config.principal;
        _this._statementId = config.statementId;
        _this._condition = config.condition;
        return _this;
    }
    Object.defineProperty(CloudwatchEventPermission.prototype, "action", {
        get: function () {
            return this.getStringAttribute('action');
        },
        set: function (value) {
            this._action = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchEventPermission.prototype.resetAction = function () {
        this._action = undefined;
    };
    Object.defineProperty(CloudwatchEventPermission.prototype, "actionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._action;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventPermission.prototype, "eventBusName", {
        get: function () {
            return this.getStringAttribute('event_bus_name');
        },
        set: function (value) {
            this._eventBusName = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchEventPermission.prototype.resetEventBusName = function () {
        this._eventBusName = undefined;
    };
    Object.defineProperty(CloudwatchEventPermission.prototype, "eventBusNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._eventBusName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventPermission.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventPermission.prototype, "principal", {
        get: function () {
            return this.getStringAttribute('principal');
        },
        set: function (value) {
            this._principal = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventPermission.prototype, "principalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._principal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventPermission.prototype, "statementId", {
        get: function () {
            return this.getStringAttribute('statement_id');
        },
        set: function (value) {
            this._statementId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventPermission.prototype, "statementIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._statementId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventPermission.prototype, "condition", {
        get: function () {
            return this.interpolationForAttribute('condition');
        },
        set: function (value) {
            this._condition = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchEventPermission.prototype.resetCondition = function () {
        this._condition = undefined;
    };
    Object.defineProperty(CloudwatchEventPermission.prototype, "conditionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._condition;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CloudwatchEventPermission.prototype.synthesizeAttributes = function () {
        return {
            action: cdktf.stringToTerraform(this._action),
            event_bus_name: cdktf.stringToTerraform(this._eventBusName),
            principal: cdktf.stringToTerraform(this._principal),
            statement_id: cdktf.stringToTerraform(this._statementId),
            condition: cdktf.listMapper(cloudwatchEventPermissionConditionToTerraform)(this._condition)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CloudwatchEventPermission.tfResourceType = "aws_cloudwatch_event_permission";
    return CloudwatchEventPermission;
}(cdktf.TerraformResource));
exports.CloudwatchEventPermission = CloudwatchEventPermission;
