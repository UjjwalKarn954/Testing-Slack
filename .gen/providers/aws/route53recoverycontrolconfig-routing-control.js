"use strict";
// https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_routing_control.html
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
exports.Route53RecoverycontrolconfigRoutingControl = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_routing_control.html aws_route53recoverycontrolconfig_routing_control}
*/
var Route53RecoverycontrolconfigRoutingControl = /** @class */ (function (_super) {
    __extends(Route53RecoverycontrolconfigRoutingControl, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_routing_control.html aws_route53recoverycontrolconfig_routing_control} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoverycontrolconfigRoutingControlConfig
    */
    function Route53RecoverycontrolconfigRoutingControl(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_route53recoverycontrolconfig_routing_control',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._clusterArn = config.clusterArn;
        _this._controlPanelArn = config.controlPanelArn;
        _this._name = config.name;
        return _this;
    }
    Object.defineProperty(Route53RecoverycontrolconfigRoutingControl.prototype, "arn", {
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
    Object.defineProperty(Route53RecoverycontrolconfigRoutingControl.prototype, "clusterArn", {
        get: function () {
            return this.getStringAttribute('cluster_arn');
        },
        set: function (value) {
            this._clusterArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoverycontrolconfigRoutingControl.prototype, "clusterArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoverycontrolconfigRoutingControl.prototype, "controlPanelArn", {
        get: function () {
            return this.getStringAttribute('control_panel_arn');
        },
        set: function (value) {
            this._controlPanelArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53RecoverycontrolconfigRoutingControl.prototype.resetControlPanelArn = function () {
        this._controlPanelArn = undefined;
    };
    Object.defineProperty(Route53RecoverycontrolconfigRoutingControl.prototype, "controlPanelArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._controlPanelArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoverycontrolconfigRoutingControl.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoverycontrolconfigRoutingControl.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoverycontrolconfigRoutingControl.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoverycontrolconfigRoutingControl.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Route53RecoverycontrolconfigRoutingControl.prototype.synthesizeAttributes = function () {
        return {
            cluster_arn: cdktf.stringToTerraform(this._clusterArn),
            control_panel_arn: cdktf.stringToTerraform(this._controlPanelArn),
            name: cdktf.stringToTerraform(this._name)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Route53RecoverycontrolconfigRoutingControl.tfResourceType = "aws_route53recoverycontrolconfig_routing_control";
    return Route53RecoverycontrolconfigRoutingControl;
}(cdktf.TerraformResource));
exports.Route53RecoverycontrolconfigRoutingControl = Route53RecoverycontrolconfigRoutingControl;
