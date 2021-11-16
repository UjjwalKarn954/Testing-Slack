"use strict";
// https://www.terraform.io/docs/providers/aws/r/eks_addon.html
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
exports.EksAddon = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_addon.html aws_eks_addon}
*/
var EksAddon = /** @class */ (function (_super) {
    __extends(EksAddon, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eks_addon.html aws_eks_addon} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EksAddonConfig
    */
    function EksAddon(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_eks_addon',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._addonName = config.addonName;
        _this._addonVersion = config.addonVersion;
        _this._clusterName = config.clusterName;
        _this._resolveConflicts = config.resolveConflicts;
        _this._serviceAccountRoleArn = config.serviceAccountRoleArn;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(EksAddon.prototype, "addonName", {
        get: function () {
            return this.getStringAttribute('addon_name');
        },
        set: function (value) {
            this._addonName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksAddon.prototype, "addonNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._addonName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksAddon.prototype, "addonVersion", {
        get: function () {
            return this.getStringAttribute('addon_version');
        },
        set: function (value) {
            this._addonVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    EksAddon.prototype.resetAddonVersion = function () {
        this._addonVersion = undefined;
    };
    Object.defineProperty(EksAddon.prototype, "addonVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._addonVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksAddon.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksAddon.prototype, "clusterName", {
        get: function () {
            return this.getStringAttribute('cluster_name');
        },
        set: function (value) {
            this._clusterName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksAddon.prototype, "clusterNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksAddon.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksAddon.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksAddon.prototype, "modifiedAt", {
        // modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksAddon.prototype, "resolveConflicts", {
        get: function () {
            return this.getStringAttribute('resolve_conflicts');
        },
        set: function (value) {
            this._resolveConflicts = value;
        },
        enumerable: false,
        configurable: true
    });
    EksAddon.prototype.resetResolveConflicts = function () {
        this._resolveConflicts = undefined;
    };
    Object.defineProperty(EksAddon.prototype, "resolveConflictsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resolveConflicts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksAddon.prototype, "serviceAccountRoleArn", {
        get: function () {
            return this.getStringAttribute('service_account_role_arn');
        },
        set: function (value) {
            this._serviceAccountRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    EksAddon.prototype.resetServiceAccountRoleArn = function () {
        this._serviceAccountRoleArn = undefined;
    };
    Object.defineProperty(EksAddon.prototype, "serviceAccountRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceAccountRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksAddon.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    EksAddon.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(EksAddon.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksAddon.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    EksAddon.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(EksAddon.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    EksAddon.prototype.synthesizeAttributes = function () {
        return {
            addon_name: cdktf.stringToTerraform(this._addonName),
            addon_version: cdktf.stringToTerraform(this._addonVersion),
            cluster_name: cdktf.stringToTerraform(this._clusterName),
            resolve_conflicts: cdktf.stringToTerraform(this._resolveConflicts),
            service_account_role_arn: cdktf.stringToTerraform(this._serviceAccountRoleArn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    EksAddon.tfResourceType = "aws_eks_addon";
    return EksAddon;
}(cdktf.TerraformResource));
exports.EksAddon = EksAddon;
