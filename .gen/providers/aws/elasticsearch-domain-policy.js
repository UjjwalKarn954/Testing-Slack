"use strict";
// https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_policy.html
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
exports.ElasticsearchDomainPolicy = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_policy.html aws_elasticsearch_domain_policy}
*/
var ElasticsearchDomainPolicy = /** @class */ (function (_super) {
    __extends(ElasticsearchDomainPolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_policy.html aws_elasticsearch_domain_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticsearchDomainPolicyConfig
    */
    function ElasticsearchDomainPolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_elasticsearch_domain_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._accessPolicies = config.accessPolicies;
        _this._domainName = config.domainName;
        return _this;
    }
    Object.defineProperty(ElasticsearchDomainPolicy.prototype, "accessPolicies", {
        get: function () {
            return this.getStringAttribute('access_policies');
        },
        set: function (value) {
            this._accessPolicies = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticsearchDomainPolicy.prototype, "accessPoliciesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessPolicies;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticsearchDomainPolicy.prototype, "domainName", {
        get: function () {
            return this.getStringAttribute('domain_name');
        },
        set: function (value) {
            this._domainName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticsearchDomainPolicy.prototype, "domainNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domainName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticsearchDomainPolicy.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ElasticsearchDomainPolicy.prototype.synthesizeAttributes = function () {
        return {
            access_policies: cdktf.stringToTerraform(this._accessPolicies),
            domain_name: cdktf.stringToTerraform(this._domainName)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ElasticsearchDomainPolicy.tfResourceType = "aws_elasticsearch_domain_policy";
    return ElasticsearchDomainPolicy;
}(cdktf.TerraformResource));
exports.ElasticsearchDomainPolicy = ElasticsearchDomainPolicy;
