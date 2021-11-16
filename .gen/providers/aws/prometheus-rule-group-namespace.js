"use strict";
// https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace.html
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
exports.PrometheusRuleGroupNamespace = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace.html aws_prometheus_rule_group_namespace}
*/
var PrometheusRuleGroupNamespace = /** @class */ (function (_super) {
    __extends(PrometheusRuleGroupNamespace, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace.html aws_prometheus_rule_group_namespace} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PrometheusRuleGroupNamespaceConfig
    */
    function PrometheusRuleGroupNamespace(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_prometheus_rule_group_namespace',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._data = config.data;
        _this._name = config.name;
        _this._workspaceId = config.workspaceId;
        return _this;
    }
    Object.defineProperty(PrometheusRuleGroupNamespace.prototype, "data", {
        get: function () {
            return this.getStringAttribute('data');
        },
        set: function (value) {
            this._data = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrometheusRuleGroupNamespace.prototype, "dataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrometheusRuleGroupNamespace.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrometheusRuleGroupNamespace.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrometheusRuleGroupNamespace.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrometheusRuleGroupNamespace.prototype, "workspaceId", {
        get: function () {
            return this.getStringAttribute('workspace_id');
        },
        set: function (value) {
            this._workspaceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrometheusRuleGroupNamespace.prototype, "workspaceIdInput", {
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
    PrometheusRuleGroupNamespace.prototype.synthesizeAttributes = function () {
        return {
            data: cdktf.stringToTerraform(this._data),
            name: cdktf.stringToTerraform(this._name),
            workspace_id: cdktf.stringToTerraform(this._workspaceId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    PrometheusRuleGroupNamespace.tfResourceType = "aws_prometheus_rule_group_namespace";
    return PrometheusRuleGroupNamespace;
}(cdktf.TerraformResource));
exports.PrometheusRuleGroupNamespace = PrometheusRuleGroupNamespace;
