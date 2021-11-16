"use strict";
// https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html
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
exports.EksIdentityProviderConfig = void 0;
var cdktf = require("cdktf");
function eksIdentityProviderConfigOidcToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        client_id: cdktf.stringToTerraform(struct.clientId),
        groups_claim: cdktf.stringToTerraform(struct.groupsClaim),
        groups_prefix: cdktf.stringToTerraform(struct.groupsPrefix),
        identity_provider_config_name: cdktf.stringToTerraform(struct.identityProviderConfigName),
        issuer_url: cdktf.stringToTerraform(struct.issuerUrl),
        required_claims: cdktf.hashMapper(cdktf.anyToTerraform)(struct.requiredClaims),
        username_claim: cdktf.stringToTerraform(struct.usernameClaim),
        username_prefix: cdktf.stringToTerraform(struct.usernamePrefix)
    };
}
function eksIdentityProviderConfigTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"])
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html aws_eks_identity_provider_config}
*/
var EksIdentityProviderConfig = /** @class */ (function (_super) {
    __extends(EksIdentityProviderConfig, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html aws_eks_identity_provider_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EksIdentityProviderConfigConfig
    */
    function EksIdentityProviderConfig(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_eks_identity_provider_config',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._clusterName = config.clusterName;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._oidc = config.oidc;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(EksIdentityProviderConfig.prototype, "arn", {
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
    Object.defineProperty(EksIdentityProviderConfig.prototype, "clusterName", {
        get: function () {
            return this.getStringAttribute('cluster_name');
        },
        set: function (value) {
            this._clusterName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksIdentityProviderConfig.prototype, "clusterNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksIdentityProviderConfig.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksIdentityProviderConfig.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksIdentityProviderConfig.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    EksIdentityProviderConfig.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(EksIdentityProviderConfig.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksIdentityProviderConfig.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    EksIdentityProviderConfig.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(EksIdentityProviderConfig.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksIdentityProviderConfig.prototype, "oidc", {
        get: function () {
            return this.interpolationForAttribute('oidc');
        },
        set: function (value) {
            this._oidc = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksIdentityProviderConfig.prototype, "oidcInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._oidc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksIdentityProviderConfig.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    EksIdentityProviderConfig.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(EksIdentityProviderConfig.prototype, "timeoutsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeouts;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    EksIdentityProviderConfig.prototype.synthesizeAttributes = function () {
        return {
            cluster_name: cdktf.stringToTerraform(this._clusterName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            oidc: cdktf.listMapper(eksIdentityProviderConfigOidcToTerraform)(this._oidc),
            timeouts: eksIdentityProviderConfigTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    EksIdentityProviderConfig.tfResourceType = "aws_eks_identity_provider_config";
    return EksIdentityProviderConfig;
}(cdktf.TerraformResource));
exports.EksIdentityProviderConfig = EksIdentityProviderConfig;
