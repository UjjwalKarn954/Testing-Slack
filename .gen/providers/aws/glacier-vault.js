"use strict";
// https://www.terraform.io/docs/providers/aws/r/glacier_vault.html
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
exports.GlacierVault = void 0;
var cdktf = require("cdktf");
function glacierVaultNotificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        events: cdktf.listMapper(cdktf.stringToTerraform)(struct.events),
        sns_topic: cdktf.stringToTerraform(struct.snsTopic)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault.html aws_glacier_vault}
*/
var GlacierVault = /** @class */ (function (_super) {
    __extends(GlacierVault, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault.html aws_glacier_vault} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlacierVaultConfig
    */
    function GlacierVault(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_glacier_vault',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._accessPolicy = config.accessPolicy;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._notification = config.notification;
        return _this;
    }
    Object.defineProperty(GlacierVault.prototype, "accessPolicy", {
        get: function () {
            return this.getStringAttribute('access_policy');
        },
        set: function (value) {
            this._accessPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    GlacierVault.prototype.resetAccessPolicy = function () {
        this._accessPolicy = undefined;
    };
    Object.defineProperty(GlacierVault.prototype, "accessPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessPolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlacierVault.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlacierVault.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlacierVault.prototype, "location", {
        // location - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('location');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlacierVault.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlacierVault.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlacierVault.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    GlacierVault.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(GlacierVault.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlacierVault.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    GlacierVault.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(GlacierVault.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlacierVault.prototype, "notification", {
        get: function () {
            return this.interpolationForAttribute('notification');
        },
        set: function (value) {
            this._notification = value;
        },
        enumerable: false,
        configurable: true
    });
    GlacierVault.prototype.resetNotification = function () {
        this._notification = undefined;
    };
    Object.defineProperty(GlacierVault.prototype, "notificationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._notification;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    GlacierVault.prototype.synthesizeAttributes = function () {
        return {
            access_policy: cdktf.stringToTerraform(this._accessPolicy),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            notification: cdktf.listMapper(glacierVaultNotificationToTerraform)(this._notification)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    GlacierVault.tfResourceType = "aws_glacier_vault";
    return GlacierVault;
}(cdktf.TerraformResource));
exports.GlacierVault = GlacierVault;
