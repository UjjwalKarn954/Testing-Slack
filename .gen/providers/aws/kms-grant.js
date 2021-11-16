"use strict";
// https://www.terraform.io/docs/providers/aws/r/kms_grant.html
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
exports.KmsGrant = void 0;
var cdktf = require("cdktf");
function kmsGrantConstraintsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        encryption_context_equals: cdktf.hashMapper(cdktf.anyToTerraform)(struct.encryptionContextEquals),
        encryption_context_subset: cdktf.hashMapper(cdktf.anyToTerraform)(struct.encryptionContextSubset)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kms_grant.html aws_kms_grant}
*/
var KmsGrant = /** @class */ (function (_super) {
    __extends(KmsGrant, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kms_grant.html aws_kms_grant} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KmsGrantConfig
    */
    function KmsGrant(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_kms_grant',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._grantCreationTokens = config.grantCreationTokens;
        _this._granteePrincipal = config.granteePrincipal;
        _this._keyId = config.keyId;
        _this._name = config.name;
        _this._operations = config.operations;
        _this._retireOnDelete = config.retireOnDelete;
        _this._retiringPrincipal = config.retiringPrincipal;
        _this._constraints = config.constraints;
        return _this;
    }
    Object.defineProperty(KmsGrant.prototype, "grantCreationTokens", {
        get: function () {
            return this.getListAttribute('grant_creation_tokens');
        },
        set: function (value) {
            this._grantCreationTokens = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsGrant.prototype.resetGrantCreationTokens = function () {
        this._grantCreationTokens = undefined;
    };
    Object.defineProperty(KmsGrant.prototype, "grantCreationTokensInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._grantCreationTokens;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsGrant.prototype, "grantId", {
        // grant_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('grant_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsGrant.prototype, "grantToken", {
        // grant_token - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('grant_token');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsGrant.prototype, "granteePrincipal", {
        get: function () {
            return this.getStringAttribute('grantee_principal');
        },
        set: function (value) {
            this._granteePrincipal = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsGrant.prototype, "granteePrincipalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._granteePrincipal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsGrant.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsGrant.prototype, "keyId", {
        get: function () {
            return this.getStringAttribute('key_id');
        },
        set: function (value) {
            this._keyId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsGrant.prototype, "keyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsGrant.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsGrant.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(KmsGrant.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsGrant.prototype, "operations", {
        get: function () {
            return this.getListAttribute('operations');
        },
        set: function (value) {
            this._operations = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsGrant.prototype, "operationsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operations;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsGrant.prototype, "retireOnDelete", {
        get: function () {
            return this.getBooleanAttribute('retire_on_delete');
        },
        set: function (value) {
            this._retireOnDelete = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsGrant.prototype.resetRetireOnDelete = function () {
        this._retireOnDelete = undefined;
    };
    Object.defineProperty(KmsGrant.prototype, "retireOnDeleteInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._retireOnDelete;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsGrant.prototype, "retiringPrincipal", {
        get: function () {
            return this.getStringAttribute('retiring_principal');
        },
        set: function (value) {
            this._retiringPrincipal = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsGrant.prototype.resetRetiringPrincipal = function () {
        this._retiringPrincipal = undefined;
    };
    Object.defineProperty(KmsGrant.prototype, "retiringPrincipalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._retiringPrincipal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsGrant.prototype, "constraints", {
        get: function () {
            return this.interpolationForAttribute('constraints');
        },
        set: function (value) {
            this._constraints = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsGrant.prototype.resetConstraints = function () {
        this._constraints = undefined;
    };
    Object.defineProperty(KmsGrant.prototype, "constraintsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._constraints;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    KmsGrant.prototype.synthesizeAttributes = function () {
        return {
            grant_creation_tokens: cdktf.listMapper(cdktf.stringToTerraform)(this._grantCreationTokens),
            grantee_principal: cdktf.stringToTerraform(this._granteePrincipal),
            key_id: cdktf.stringToTerraform(this._keyId),
            name: cdktf.stringToTerraform(this._name),
            operations: cdktf.listMapper(cdktf.stringToTerraform)(this._operations),
            retire_on_delete: cdktf.booleanToTerraform(this._retireOnDelete),
            retiring_principal: cdktf.stringToTerraform(this._retiringPrincipal),
            constraints: cdktf.listMapper(kmsGrantConstraintsToTerraform)(this._constraints)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    KmsGrant.tfResourceType = "aws_kms_grant";
    return KmsGrant;
}(cdktf.TerraformResource));
exports.KmsGrant = KmsGrant;
