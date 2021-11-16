"use strict";
// https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html
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
exports.StoragegatewayFileSystemAssociation = void 0;
var cdktf = require("cdktf");
function storagegatewayFileSystemAssociationCacheAttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cache_stale_timeout_in_seconds: cdktf.numberToTerraform(struct.cacheStaleTimeoutInSeconds)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html aws_storagegateway_file_system_association}
*/
var StoragegatewayFileSystemAssociation = /** @class */ (function (_super) {
    __extends(StoragegatewayFileSystemAssociation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_file_system_association.html aws_storagegateway_file_system_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StoragegatewayFileSystemAssociationConfig
    */
    function StoragegatewayFileSystemAssociation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_storagegateway_file_system_association',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._auditDestinationArn = config.auditDestinationArn;
        _this._gatewayArn = config.gatewayArn;
        _this._locationArn = config.locationArn;
        _this._password = config.password;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._username = config.username;
        _this._cacheAttributes = config.cacheAttributes;
        return _this;
    }
    Object.defineProperty(StoragegatewayFileSystemAssociation.prototype, "arn", {
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
    Object.defineProperty(StoragegatewayFileSystemAssociation.prototype, "auditDestinationArn", {
        get: function () {
            return this.getStringAttribute('audit_destination_arn');
        },
        set: function (value) {
            this._auditDestinationArn = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayFileSystemAssociation.prototype.resetAuditDestinationArn = function () {
        this._auditDestinationArn = undefined;
    };
    Object.defineProperty(StoragegatewayFileSystemAssociation.prototype, "auditDestinationArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._auditDestinationArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayFileSystemAssociation.prototype, "gatewayArn", {
        get: function () {
            return this.getStringAttribute('gateway_arn');
        },
        set: function (value) {
            this._gatewayArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayFileSystemAssociation.prototype, "gatewayArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gatewayArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayFileSystemAssociation.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayFileSystemAssociation.prototype, "locationArn", {
        get: function () {
            return this.getStringAttribute('location_arn');
        },
        set: function (value) {
            this._locationArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayFileSystemAssociation.prototype, "locationArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._locationArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayFileSystemAssociation.prototype, "password", {
        get: function () {
            return this.getStringAttribute('password');
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayFileSystemAssociation.prototype, "passwordInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayFileSystemAssociation.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayFileSystemAssociation.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(StoragegatewayFileSystemAssociation.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayFileSystemAssociation.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayFileSystemAssociation.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(StoragegatewayFileSystemAssociation.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayFileSystemAssociation.prototype, "username", {
        get: function () {
            return this.getStringAttribute('username');
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayFileSystemAssociation.prototype, "usernameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._username;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayFileSystemAssociation.prototype, "cacheAttributes", {
        get: function () {
            return this.interpolationForAttribute('cache_attributes');
        },
        set: function (value) {
            this._cacheAttributes = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayFileSystemAssociation.prototype.resetCacheAttributes = function () {
        this._cacheAttributes = undefined;
    };
    Object.defineProperty(StoragegatewayFileSystemAssociation.prototype, "cacheAttributesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cacheAttributes;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    StoragegatewayFileSystemAssociation.prototype.synthesizeAttributes = function () {
        return {
            audit_destination_arn: cdktf.stringToTerraform(this._auditDestinationArn),
            gateway_arn: cdktf.stringToTerraform(this._gatewayArn),
            location_arn: cdktf.stringToTerraform(this._locationArn),
            password: cdktf.stringToTerraform(this._password),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            username: cdktf.stringToTerraform(this._username),
            cache_attributes: cdktf.listMapper(storagegatewayFileSystemAssociationCacheAttributesToTerraform)(this._cacheAttributes)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    StoragegatewayFileSystemAssociation.tfResourceType = "aws_storagegateway_file_system_association";
    return StoragegatewayFileSystemAssociation;
}(cdktf.TerraformResource));
exports.StoragegatewayFileSystemAssociation = StoragegatewayFileSystemAssociation;
