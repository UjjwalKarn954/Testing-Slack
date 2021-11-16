"use strict";
// https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule.html
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
exports.XraySamplingRule = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule.html aws_xray_sampling_rule}
*/
var XraySamplingRule = /** @class */ (function (_super) {
    __extends(XraySamplingRule, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule.html aws_xray_sampling_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options XraySamplingRuleConfig
    */
    function XraySamplingRule(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_xray_sampling_rule',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._attributes = config.attributes;
        _this._fixedRate = config.fixedRate;
        _this._host = config.host;
        _this._httpMethod = config.httpMethod;
        _this._priority = config.priority;
        _this._reservoirSize = config.reservoirSize;
        _this._resourceArn = config.resourceArn;
        _this._ruleName = config.ruleName;
        _this._serviceName = config.serviceName;
        _this._serviceType = config.serviceType;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._urlPath = config.urlPath;
        _this._version = config.version;
        return _this;
    }
    Object.defineProperty(XraySamplingRule.prototype, "arn", {
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
    Object.defineProperty(XraySamplingRule.prototype, "attributes", {
        get: function () {
            return this.interpolationForAttribute('attributes');
        },
        set: function (value) {
            this._attributes = value;
        },
        enumerable: false,
        configurable: true
    });
    XraySamplingRule.prototype.resetAttributes = function () {
        this._attributes = undefined;
    };
    Object.defineProperty(XraySamplingRule.prototype, "attributesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._attributes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XraySamplingRule.prototype, "fixedRate", {
        get: function () {
            return this.getNumberAttribute('fixed_rate');
        },
        set: function (value) {
            this._fixedRate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XraySamplingRule.prototype, "fixedRateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fixedRate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XraySamplingRule.prototype, "host", {
        get: function () {
            return this.getStringAttribute('host');
        },
        set: function (value) {
            this._host = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XraySamplingRule.prototype, "hostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XraySamplingRule.prototype, "httpMethod", {
        get: function () {
            return this.getStringAttribute('http_method');
        },
        set: function (value) {
            this._httpMethod = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XraySamplingRule.prototype, "httpMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._httpMethod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XraySamplingRule.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XraySamplingRule.prototype, "priority", {
        get: function () {
            return this.getNumberAttribute('priority');
        },
        set: function (value) {
            this._priority = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XraySamplingRule.prototype, "priorityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._priority;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XraySamplingRule.prototype, "reservoirSize", {
        get: function () {
            return this.getNumberAttribute('reservoir_size');
        },
        set: function (value) {
            this._reservoirSize = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XraySamplingRule.prototype, "reservoirSizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._reservoirSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XraySamplingRule.prototype, "resourceArn", {
        get: function () {
            return this.getStringAttribute('resource_arn');
        },
        set: function (value) {
            this._resourceArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XraySamplingRule.prototype, "resourceArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XraySamplingRule.prototype, "ruleName", {
        get: function () {
            return this.getStringAttribute('rule_name');
        },
        set: function (value) {
            this._ruleName = value;
        },
        enumerable: false,
        configurable: true
    });
    XraySamplingRule.prototype.resetRuleName = function () {
        this._ruleName = undefined;
    };
    Object.defineProperty(XraySamplingRule.prototype, "ruleNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ruleName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XraySamplingRule.prototype, "serviceName", {
        get: function () {
            return this.getStringAttribute('service_name');
        },
        set: function (value) {
            this._serviceName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XraySamplingRule.prototype, "serviceNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XraySamplingRule.prototype, "serviceType", {
        get: function () {
            return this.getStringAttribute('service_type');
        },
        set: function (value) {
            this._serviceType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XraySamplingRule.prototype, "serviceTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XraySamplingRule.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    XraySamplingRule.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(XraySamplingRule.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XraySamplingRule.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    XraySamplingRule.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(XraySamplingRule.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XraySamplingRule.prototype, "urlPath", {
        get: function () {
            return this.getStringAttribute('url_path');
        },
        set: function (value) {
            this._urlPath = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XraySamplingRule.prototype, "urlPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._urlPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XraySamplingRule.prototype, "version", {
        get: function () {
            return this.getNumberAttribute('version');
        },
        set: function (value) {
            this._version = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XraySamplingRule.prototype, "versionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._version;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    XraySamplingRule.prototype.synthesizeAttributes = function () {
        return {
            attributes: cdktf.hashMapper(cdktf.anyToTerraform)(this._attributes),
            fixed_rate: cdktf.numberToTerraform(this._fixedRate),
            host: cdktf.stringToTerraform(this._host),
            http_method: cdktf.stringToTerraform(this._httpMethod),
            priority: cdktf.numberToTerraform(this._priority),
            reservoir_size: cdktf.numberToTerraform(this._reservoirSize),
            resource_arn: cdktf.stringToTerraform(this._resourceArn),
            rule_name: cdktf.stringToTerraform(this._ruleName),
            service_name: cdktf.stringToTerraform(this._serviceName),
            service_type: cdktf.stringToTerraform(this._serviceType),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            url_path: cdktf.stringToTerraform(this._urlPath),
            version: cdktf.numberToTerraform(this._version)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    XraySamplingRule.tfResourceType = "aws_xray_sampling_rule";
    return XraySamplingRule;
}(cdktf.TerraformResource));
exports.XraySamplingRule = XraySamplingRule;
