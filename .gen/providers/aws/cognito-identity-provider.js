"use strict";
// https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider.html
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
exports.CognitoIdentityProvider = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider.html aws_cognito_identity_provider}
*/
var CognitoIdentityProvider = /** @class */ (function (_super) {
    __extends(CognitoIdentityProvider, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider.html aws_cognito_identity_provider} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoIdentityProviderConfig
    */
    function CognitoIdentityProvider(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cognito_identity_provider',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._attributeMapping = config.attributeMapping;
        _this._idpIdentifiers = config.idpIdentifiers;
        _this._providerDetails = config.providerDetails;
        _this._providerName = config.providerName;
        _this._providerType = config.providerType;
        _this._userPoolId = config.userPoolId;
        return _this;
    }
    Object.defineProperty(CognitoIdentityProvider.prototype, "attributeMapping", {
        get: function () {
            return this.interpolationForAttribute('attribute_mapping'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._attributeMapping = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoIdentityProvider.prototype.resetAttributeMapping = function () {
        this._attributeMapping = undefined;
    };
    Object.defineProperty(CognitoIdentityProvider.prototype, "attributeMappingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._attributeMapping;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoIdentityProvider.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoIdentityProvider.prototype, "idpIdentifiers", {
        get: function () {
            return this.getListAttribute('idp_identifiers');
        },
        set: function (value) {
            this._idpIdentifiers = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoIdentityProvider.prototype.resetIdpIdentifiers = function () {
        this._idpIdentifiers = undefined;
    };
    Object.defineProperty(CognitoIdentityProvider.prototype, "idpIdentifiersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._idpIdentifiers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoIdentityProvider.prototype, "providerDetails", {
        get: function () {
            return this.interpolationForAttribute('provider_details');
        },
        set: function (value) {
            this._providerDetails = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoIdentityProvider.prototype, "providerDetailsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._providerDetails;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoIdentityProvider.prototype, "providerName", {
        get: function () {
            return this.getStringAttribute('provider_name');
        },
        set: function (value) {
            this._providerName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoIdentityProvider.prototype, "providerNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._providerName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoIdentityProvider.prototype, "providerType", {
        get: function () {
            return this.getStringAttribute('provider_type');
        },
        set: function (value) {
            this._providerType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoIdentityProvider.prototype, "providerTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._providerType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoIdentityProvider.prototype, "userPoolId", {
        get: function () {
            return this.getStringAttribute('user_pool_id');
        },
        set: function (value) {
            this._userPoolId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoIdentityProvider.prototype, "userPoolIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userPoolId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CognitoIdentityProvider.prototype.synthesizeAttributes = function () {
        return {
            attribute_mapping: cdktf.hashMapper(cdktf.anyToTerraform)(this._attributeMapping),
            idp_identifiers: cdktf.listMapper(cdktf.stringToTerraform)(this._idpIdentifiers),
            provider_details: cdktf.hashMapper(cdktf.anyToTerraform)(this._providerDetails),
            provider_name: cdktf.stringToTerraform(this._providerName),
            provider_type: cdktf.stringToTerraform(this._providerType),
            user_pool_id: cdktf.stringToTerraform(this._userPoolId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CognitoIdentityProvider.tfResourceType = "aws_cognito_identity_provider";
    return CognitoIdentityProvider;
}(cdktf.TerraformResource));
exports.CognitoIdentityProvider = CognitoIdentityProvider;
