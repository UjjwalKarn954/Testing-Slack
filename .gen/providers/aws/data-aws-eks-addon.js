"use strict";
// https://www.terraform.io/docs/providers/aws/d/eks_addon.html
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
exports.DataAwsEksAddon = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/eks_addon.html aws_eks_addon}
*/
var DataAwsEksAddon = /** @class */ (function (_super) {
    __extends(DataAwsEksAddon, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/eks_addon.html aws_eks_addon} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEksAddonConfig
    */
    function DataAwsEksAddon(scope, id, config) {
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
        _this._clusterName = config.clusterName;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsEksAddon.prototype, "addonName", {
        get: function () {
            return this.getStringAttribute('addon_name');
        },
        set: function (value) {
            this._addonName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksAddon.prototype, "addonNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._addonName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksAddon.prototype, "addonVersion", {
        // addon_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('addon_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksAddon.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksAddon.prototype, "clusterName", {
        get: function () {
            return this.getStringAttribute('cluster_name');
        },
        set: function (value) {
            this._clusterName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksAddon.prototype, "clusterNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksAddon.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksAddon.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksAddon.prototype, "modifiedAt", {
        // modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksAddon.prototype, "serviceAccountRoleArn", {
        // service_account_role_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service_account_role_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksAddon.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEksAddon.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsEksAddon.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsEksAddon.prototype.synthesizeAttributes = function () {
        return {
            addon_name: cdktf.stringToTerraform(this._addonName),
            cluster_name: cdktf.stringToTerraform(this._clusterName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsEksAddon.tfResourceType = "aws_eks_addon";
    return DataAwsEksAddon;
}(cdktf.TerraformDataSource));
exports.DataAwsEksAddon = DataAwsEksAddon;
