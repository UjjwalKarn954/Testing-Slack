"use strict";
// https://www.terraform.io/docs/providers/aws/r/prometheus_workspace.html
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
exports.PrometheusWorkspace = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/prometheus_workspace.html aws_prometheus_workspace}
*/
var PrometheusWorkspace = /** @class */ (function (_super) {
    __extends(PrometheusWorkspace, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/prometheus_workspace.html aws_prometheus_workspace} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PrometheusWorkspaceConfig = {}
    */
    function PrometheusWorkspace(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_prometheus_workspace',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._alias = config.alias;
        return _this;
    }
    Object.defineProperty(PrometheusWorkspace.prototype, "alias", {
        get: function () {
            return this.getStringAttribute('alias');
        },
        set: function (value) {
            this._alias = value;
        },
        enumerable: false,
        configurable: true
    });
    PrometheusWorkspace.prototype.resetAlias = function () {
        this._alias = undefined;
    };
    Object.defineProperty(PrometheusWorkspace.prototype, "aliasInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._alias;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrometheusWorkspace.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrometheusWorkspace.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PrometheusWorkspace.prototype, "prometheusEndpoint", {
        // prometheus_endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('prometheus_endpoint');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    PrometheusWorkspace.prototype.synthesizeAttributes = function () {
        return {
            alias: cdktf.stringToTerraform(this._alias)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    PrometheusWorkspace.tfResourceType = "aws_prometheus_workspace";
    return PrometheusWorkspace;
}(cdktf.TerraformResource));
exports.PrometheusWorkspace = PrometheusWorkspace;
