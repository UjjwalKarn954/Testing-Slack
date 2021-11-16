"use strict";
// https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_control_panel.html
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
exports.Route53RecoverycontrolconfigControlPanel = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_control_panel.html aws_route53recoverycontrolconfig_control_panel}
*/
var Route53RecoverycontrolconfigControlPanel = /** @class */ (function (_super) {
    __extends(Route53RecoverycontrolconfigControlPanel, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_control_panel.html aws_route53recoverycontrolconfig_control_panel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoverycontrolconfigControlPanelConfig
    */
    function Route53RecoverycontrolconfigControlPanel(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_route53recoverycontrolconfig_control_panel',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._clusterArn = config.clusterArn;
        _this._name = config.name;
        return _this;
    }
    Object.defineProperty(Route53RecoverycontrolconfigControlPanel.prototype, "arn", {
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
    Object.defineProperty(Route53RecoverycontrolconfigControlPanel.prototype, "clusterArn", {
        get: function () {
            return this.getStringAttribute('cluster_arn');
        },
        set: function (value) {
            this._clusterArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoverycontrolconfigControlPanel.prototype, "clusterArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoverycontrolconfigControlPanel.prototype, "defaultControlPanel", {
        // default_control_panel - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('default_control_panel');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoverycontrolconfigControlPanel.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoverycontrolconfigControlPanel.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoverycontrolconfigControlPanel.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoverycontrolconfigControlPanel.prototype, "routingControlCount", {
        // routing_control_count - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('routing_control_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoverycontrolconfigControlPanel.prototype, "status", {
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
    Route53RecoverycontrolconfigControlPanel.prototype.synthesizeAttributes = function () {
        return {
            cluster_arn: cdktf.stringToTerraform(this._clusterArn),
            name: cdktf.stringToTerraform(this._name)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Route53RecoverycontrolconfigControlPanel.tfResourceType = "aws_route53recoverycontrolconfig_control_panel";
    return Route53RecoverycontrolconfigControlPanel;
}(cdktf.TerraformResource));
exports.Route53RecoverycontrolconfigControlPanel = Route53RecoverycontrolconfigControlPanel;
