"use strict";
// https://www.terraform.io/docs/providers/aws/r/prometheus_alert_manager_definition.html
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
exports.PrometheusAlertManagerDefinition = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/prometheus_alert_manager_definition.html aws_prometheus_alert_manager_definition}
*/
var PrometheusAlertManagerDefinition = /** @class */ (function (_super) {
    __extends(PrometheusAlertManagerDefinition, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/prometheus_alert_manager_definition.html aws_prometheus_alert_manager_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PrometheusAlertManagerDefinitionConfig
    */
    function PrometheusAlertManagerDefinition(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_prometheus_alert_manager_definition',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._definition = config.definition;
        _this._workspaceId = config.workspaceId;
        return _this;
    }
    Object.defineProperty(PrometheusAlertManagerDefinition.prototype, "definition", {
        get: function () {
            return this.getStringAttribute('definition');
        },
        set: function (value) {
            this._definition = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrometheusAlertManagerDefinition.prototype, "definitionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._definition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrometheusAlertManagerDefinition.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrometheusAlertManagerDefinition.prototype, "workspaceId", {
        get: function () {
            return this.getStringAttribute('workspace_id');
        },
        set: function (value) {
            this._workspaceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrometheusAlertManagerDefinition.prototype, "workspaceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._workspaceId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    PrometheusAlertManagerDefinition.prototype.synthesizeAttributes = function () {
        return {
            definition: cdktf.stringToTerraform(this._definition),
            workspace_id: cdktf.stringToTerraform(this._workspaceId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    PrometheusAlertManagerDefinition.tfResourceType = "aws_prometheus_alert_manager_definition";
    return PrometheusAlertManagerDefinition;
}(cdktf.TerraformResource));
exports.PrometheusAlertManagerDefinition = PrometheusAlertManagerDefinition;
