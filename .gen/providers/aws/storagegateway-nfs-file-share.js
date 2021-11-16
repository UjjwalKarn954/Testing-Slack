"use strict";
// https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html
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
exports.StoragegatewayNfsFileShare = void 0;
var cdktf = require("cdktf");
function storagegatewayNfsFileShareCacheAttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cache_stale_timeout_in_seconds: cdktf.numberToTerraform(struct.cacheStaleTimeoutInSeconds)
    };
}
function storagegatewayNfsFileShareNfsFileShareDefaultsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        directory_mode: cdktf.stringToTerraform(struct.directoryMode),
        file_mode: cdktf.stringToTerraform(struct.fileMode),
        group_id: cdktf.stringToTerraform(struct.groupId),
        owner_id: cdktf.stringToTerraform(struct.ownerId)
    };
}
function storagegatewayNfsFileShareTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"]),
        update: cdktf.stringToTerraform(struct.update)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html aws_storagegateway_nfs_file_share}
*/
var StoragegatewayNfsFileShare = /** @class */ (function (_super) {
    __extends(StoragegatewayNfsFileShare, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_nfs_file_share.html aws_storagegateway_nfs_file_share} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StoragegatewayNfsFileShareConfig
    */
    function StoragegatewayNfsFileShare(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_storagegateway_nfs_file_share',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._auditDestinationArn = config.auditDestinationArn;
        _this._clientList = config.clientList;
        _this._defaultStorageClass = config.defaultStorageClass;
        _this._fileShareName = config.fileShareName;
        _this._gatewayArn = config.gatewayArn;
        _this._guessMimeTypeEnabled = config.guessMimeTypeEnabled;
        _this._kmsEncrypted = config.kmsEncrypted;
        _this._kmsKeyArn = config.kmsKeyArn;
        _this._locationArn = config.locationArn;
        _this._notificationPolicy = config.notificationPolicy;
        _this._objectAcl = config.objectAcl;
        _this._readOnly = config.readOnly;
        _this._requesterPays = config.requesterPays;
        _this._roleArn = config.roleArn;
        _this._squash = config.squash;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._cacheAttributes = config.cacheAttributes;
        _this._nfsFileShareDefaults = config.nfsFileShareDefaults;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "arn", {
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
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "auditDestinationArn", {
        get: function () {
            return this.getStringAttribute('audit_destination_arn');
        },
        set: function (value) {
            this._auditDestinationArn = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayNfsFileShare.prototype.resetAuditDestinationArn = function () {
        this._auditDestinationArn = undefined;
    };
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "auditDestinationArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._auditDestinationArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "clientList", {
        get: function () {
            return this.getListAttribute('client_list');
        },
        set: function (value) {
            this._clientList = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "clientListInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clientList;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "defaultStorageClass", {
        get: function () {
            return this.getStringAttribute('default_storage_class');
        },
        set: function (value) {
            this._defaultStorageClass = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayNfsFileShare.prototype.resetDefaultStorageClass = function () {
        this._defaultStorageClass = undefined;
    };
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "defaultStorageClassInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultStorageClass;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "fileShareName", {
        get: function () {
            return this.getStringAttribute('file_share_name');
        },
        set: function (value) {
            this._fileShareName = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayNfsFileShare.prototype.resetFileShareName = function () {
        this._fileShareName = undefined;
    };
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "fileShareNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fileShareName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "fileshareId", {
        // fileshare_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('fileshare_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "gatewayArn", {
        get: function () {
            return this.getStringAttribute('gateway_arn');
        },
        set: function (value) {
            this._gatewayArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "gatewayArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gatewayArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "guessMimeTypeEnabled", {
        get: function () {
            return this.getBooleanAttribute('guess_mime_type_enabled');
        },
        set: function (value) {
            this._guessMimeTypeEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayNfsFileShare.prototype.resetGuessMimeTypeEnabled = function () {
        this._guessMimeTypeEnabled = undefined;
    };
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "guessMimeTypeEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._guessMimeTypeEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "kmsEncrypted", {
        get: function () {
            return this.getBooleanAttribute('kms_encrypted');
        },
        set: function (value) {
            this._kmsEncrypted = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayNfsFileShare.prototype.resetKmsEncrypted = function () {
        this._kmsEncrypted = undefined;
    };
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "kmsEncryptedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsEncrypted;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "kmsKeyArn", {
        get: function () {
            return this.getStringAttribute('kms_key_arn');
        },
        set: function (value) {
            this._kmsKeyArn = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayNfsFileShare.prototype.resetKmsKeyArn = function () {
        this._kmsKeyArn = undefined;
    };
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "kmsKeyArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsKeyArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "locationArn", {
        get: function () {
            return this.getStringAttribute('location_arn');
        },
        set: function (value) {
            this._locationArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "locationArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._locationArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "notificationPolicy", {
        get: function () {
            return this.getStringAttribute('notification_policy');
        },
        set: function (value) {
            this._notificationPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayNfsFileShare.prototype.resetNotificationPolicy = function () {
        this._notificationPolicy = undefined;
    };
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "notificationPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._notificationPolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "objectAcl", {
        get: function () {
            return this.getStringAttribute('object_acl');
        },
        set: function (value) {
            this._objectAcl = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayNfsFileShare.prototype.resetObjectAcl = function () {
        this._objectAcl = undefined;
    };
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "objectAclInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._objectAcl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "path", {
        // path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "readOnly", {
        get: function () {
            return this.getBooleanAttribute('read_only');
        },
        set: function (value) {
            this._readOnly = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayNfsFileShare.prototype.resetReadOnly = function () {
        this._readOnly = undefined;
    };
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "readOnlyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._readOnly;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "requesterPays", {
        get: function () {
            return this.getBooleanAttribute('requester_pays');
        },
        set: function (value) {
            this._requesterPays = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayNfsFileShare.prototype.resetRequesterPays = function () {
        this._requesterPays = undefined;
    };
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "requesterPaysInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requesterPays;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "roleArn", {
        get: function () {
            return this.getStringAttribute('role_arn');
        },
        set: function (value) {
            this._roleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "roleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "squash", {
        get: function () {
            return this.getStringAttribute('squash');
        },
        set: function (value) {
            this._squash = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayNfsFileShare.prototype.resetSquash = function () {
        this._squash = undefined;
    };
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "squashInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._squash;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayNfsFileShare.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayNfsFileShare.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "cacheAttributes", {
        get: function () {
            return this.interpolationForAttribute('cache_attributes');
        },
        set: function (value) {
            this._cacheAttributes = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayNfsFileShare.prototype.resetCacheAttributes = function () {
        this._cacheAttributes = undefined;
    };
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "cacheAttributesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cacheAttributes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "nfsFileShareDefaults", {
        get: function () {
            return this.interpolationForAttribute('nfs_file_share_defaults');
        },
        set: function (value) {
            this._nfsFileShareDefaults = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayNfsFileShare.prototype.resetNfsFileShareDefaults = function () {
        this._nfsFileShareDefaults = undefined;
    };
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "nfsFileShareDefaultsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._nfsFileShareDefaults;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayNfsFileShare.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(StoragegatewayNfsFileShare.prototype, "timeoutsInput", {
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
    StoragegatewayNfsFileShare.prototype.synthesizeAttributes = function () {
        return {
            audit_destination_arn: cdktf.stringToTerraform(this._auditDestinationArn),
            client_list: cdktf.listMapper(cdktf.stringToTerraform)(this._clientList),
            default_storage_class: cdktf.stringToTerraform(this._defaultStorageClass),
            file_share_name: cdktf.stringToTerraform(this._fileShareName),
            gateway_arn: cdktf.stringToTerraform(this._gatewayArn),
            guess_mime_type_enabled: cdktf.booleanToTerraform(this._guessMimeTypeEnabled),
            kms_encrypted: cdktf.booleanToTerraform(this._kmsEncrypted),
            kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
            location_arn: cdktf.stringToTerraform(this._locationArn),
            notification_policy: cdktf.stringToTerraform(this._notificationPolicy),
            object_acl: cdktf.stringToTerraform(this._objectAcl),
            read_only: cdktf.booleanToTerraform(this._readOnly),
            requester_pays: cdktf.booleanToTerraform(this._requesterPays),
            role_arn: cdktf.stringToTerraform(this._roleArn),
            squash: cdktf.stringToTerraform(this._squash),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            cache_attributes: cdktf.listMapper(storagegatewayNfsFileShareCacheAttributesToTerraform)(this._cacheAttributes),
            nfs_file_share_defaults: cdktf.listMapper(storagegatewayNfsFileShareNfsFileShareDefaultsToTerraform)(this._nfsFileShareDefaults),
            timeouts: storagegatewayNfsFileShareTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    StoragegatewayNfsFileShare.tfResourceType = "aws_storagegateway_nfs_file_share";
    return StoragegatewayNfsFileShare;
}(cdktf.TerraformResource));
exports.StoragegatewayNfsFileShare = StoragegatewayNfsFileShare;
