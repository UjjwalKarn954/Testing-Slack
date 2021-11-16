"use strict";
// https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html
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
exports.ElasticsearchDomainSamlOptions = void 0;
var cdktf = require("cdktf");
function elasticsearchDomainSamlOptionsSamlOptionsIdpToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        entity_id: cdktf.stringToTerraform(struct.entityId),
        metadata_content: cdktf.stringToTerraform(struct.metadataContent)
    };
}
function elasticsearchDomainSamlOptionsSamlOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        master_backend_role: cdktf.stringToTerraform(struct.masterBackendRole),
        master_user_name: cdktf.stringToTerraform(struct.masterUserName),
        roles_key: cdktf.stringToTerraform(struct.rolesKey),
        session_timeout_minutes: cdktf.numberToTerraform(struct.sessionTimeoutMinutes),
        subject_key: cdktf.stringToTerraform(struct.subjectKey),
        idp: cdktf.listMapper(elasticsearchDomainSamlOptionsSamlOptionsIdpToTerraform)(struct.idp)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html aws_elasticsearch_domain_saml_options}
*/
var ElasticsearchDomainSamlOptions = /** @class */ (function (_super) {
    __extends(ElasticsearchDomainSamlOptions, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html aws_elasticsearch_domain_saml_options} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticsearchDomainSamlOptionsConfig
    */
    function ElasticsearchDomainSamlOptions(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_elasticsearch_domain_saml_options',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._domainName = config.domainName;
        _this._samlOptions = config.samlOptions;
        return _this;
    }
    Object.defineProperty(ElasticsearchDomainSamlOptions.prototype, "domainName", {
        get: function () {
            return this.getStringAttribute('domain_name');
        },
        set: function (value) {
            this._domainName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticsearchDomainSamlOptions.prototype, "domainNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domainName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticsearchDomainSamlOptions.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticsearchDomainSamlOptions.prototype, "samlOptions", {
        get: function () {
            return this.interpolationForAttribute('saml_options');
        },
        set: function (value) {
            this._samlOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticsearchDomainSamlOptions.prototype.resetSamlOptions = function () {
        this._samlOptions = undefined;
    };
    Object.defineProperty(ElasticsearchDomainSamlOptions.prototype, "samlOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._samlOptions;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ElasticsearchDomainSamlOptions.prototype.synthesizeAttributes = function () {
        return {
            domain_name: cdktf.stringToTerraform(this._domainName),
            saml_options: cdktf.listMapper(elasticsearchDomainSamlOptionsSamlOptionsToTerraform)(this._samlOptions)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ElasticsearchDomainSamlOptions.tfResourceType = "aws_elasticsearch_domain_saml_options";
    return ElasticsearchDomainSamlOptions;
}(cdktf.TerraformResource));
exports.ElasticsearchDomainSamlOptions = ElasticsearchDomainSamlOptions;
