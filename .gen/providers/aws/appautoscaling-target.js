"use strict";
// https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html
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
exports.AppautoscalingTarget = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html aws_appautoscaling_target}
*/
var AppautoscalingTarget = /** @class */ (function (_super) {
    __extends(AppautoscalingTarget, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html aws_appautoscaling_target} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppautoscalingTargetConfig
    */
    function AppautoscalingTarget(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_appautoscaling_target',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._maxCapacity = config.maxCapacity;
        _this._minCapacity = config.minCapacity;
        _this._resourceId = config.resourceId;
        _this._roleArn = config.roleArn;
        _this._scalableDimension = config.scalableDimension;
        _this._serviceNamespace = config.serviceNamespace;
        return _this;
    }
    Object.defineProperty(AppautoscalingTarget.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingTarget.prototype, "maxCapacity", {
        get: function () {
            return this.getNumberAttribute('max_capacity');
        },
        set: function (value) {
            this._maxCapacity = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingTarget.prototype, "maxCapacityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxCapacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingTarget.prototype, "minCapacity", {
        get: function () {
            return this.getNumberAttribute('min_capacity');
        },
        set: function (value) {
            this._minCapacity = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingTarget.prototype, "minCapacityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._minCapacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingTarget.prototype, "resourceId", {
        get: function () {
            return this.getStringAttribute('resource_id');
        },
        set: function (value) {
            this._resourceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingTarget.prototype, "resourceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingTarget.prototype, "roleArn", {
        get: function () {
            return this.getStringAttribute('role_arn');
        },
        set: function (value) {
            this._roleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    AppautoscalingTarget.prototype.resetRoleArn = function () {
        this._roleArn = undefined;
    };
    Object.defineProperty(AppautoscalingTarget.prototype, "roleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingTarget.prototype, "scalableDimension", {
        get: function () {
            return this.getStringAttribute('scalable_dimension');
        },
        set: function (value) {
            this._scalableDimension = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingTarget.prototype, "scalableDimensionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scalableDimension;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingTarget.prototype, "serviceNamespace", {
        get: function () {
            return this.getStringAttribute('service_namespace');
        },
        set: function (value) {
            this._serviceNamespace = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingTarget.prototype, "serviceNamespaceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceNamespace;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AppautoscalingTarget.prototype.synthesizeAttributes = function () {
        return {
            max_capacity: cdktf.numberToTerraform(this._maxCapacity),
            min_capacity: cdktf.numberToTerraform(this._minCapacity),
            resource_id: cdktf.stringToTerraform(this._resourceId),
            role_arn: cdktf.stringToTerraform(this._roleArn),
            scalable_dimension: cdktf.stringToTerraform(this._scalableDimension),
            service_namespace: cdktf.stringToTerraform(this._serviceNamespace)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AppautoscalingTarget.tfResourceType = "aws_appautoscaling_target";
    return AppautoscalingTarget;
}(cdktf.TerraformResource));
exports.AppautoscalingTarget = AppautoscalingTarget;
