"use strict";
// https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html
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
exports.StoragegatewaySmbFileShare = void 0;
var cdktf = require("cdktf");
function storagegatewaySmbFileShareCacheAttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cache_stale_timeout_in_seconds: cdktf.numberToTerraform(struct.cacheStaleTimeoutInSeconds)
    };
}
function storagegatewaySmbFileShareTimeoutsToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html aws_storagegateway_smb_file_share}
*/
var StoragegatewaySmbFileShare = /** @class */ (function (_super) {
    __extends(StoragegatewaySmbFileShare, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_smb_file_share.html aws_storagegateway_smb_file_share} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StoragegatewaySmbFileShareConfig
    */
    function StoragegatewaySmbFileShare(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_storagegateway_smb_file_share',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._accessBasedEnumeration = config.accessBasedEnumeration;
        _this._adminUserList = config.adminUserList;
        _this._auditDestinationArn = config.auditDestinationArn;
        _this._authentication = config.authentication;
        _this._bucketRegion = config.bucketRegion;
        _this._caseSensitivity = config.caseSensitivity;
        _this._defaultStorageClass = config.defaultStorageClass;
        _this._fileShareName = config.fileShareName;
        _this._gatewayArn = config.gatewayArn;
        _this._guessMimeTypeEnabled = config.guessMimeTypeEnabled;
        _this._invalidUserList = config.invalidUserList;
        _this._kmsEncrypted = config.kmsEncrypted;
        _this._kmsKeyArn = config.kmsKeyArn;
        _this._locationArn = config.locationArn;
        _this._notificationPolicy = config.notificationPolicy;
        _this._objectAcl = config.objectAcl;
        _this._oplocksEnabled = config.oplocksEnabled;
        _this._readOnly = config.readOnly;
        _this._requesterPays = config.requesterPays;
        _this._roleArn = config.roleArn;
        _this._smbAclEnabled = config.smbAclEnabled;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._validUserList = config.validUserList;
        _this._vpcEndpointDnsName = config.vpcEndpointDnsName;
        _this._cacheAttributes = config.cacheAttributes;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "accessBasedEnumeration", {
        get: function () {
            return this.getBooleanAttribute('access_based_enumeration');
        },
        set: function (value) {
            this._accessBasedEnumeration = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewaySmbFileShare.prototype.resetAccessBasedEnumeration = function () {
        this._accessBasedEnumeration = undefined;
    };
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "accessBasedEnumerationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessBasedEnumeration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "adminUserList", {
        get: function () {
            return this.getListAttribute('admin_user_list');
        },
        set: function (value) {
            this._adminUserList = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewaySmbFileShare.prototype.resetAdminUserList = function () {
        this._adminUserList = undefined;
    };
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "adminUserListInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._adminUserList;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "auditDestinationArn", {
        get: function () {
            return this.getStringAttribute('audit_destination_arn');
        },
        set: function (value) {
            this._auditDestinationArn = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewaySmbFileShare.prototype.resetAuditDestinationArn = function () {
        this._auditDestinationArn = undefined;
    };
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "auditDestinationArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._auditDestinationArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "authentication", {
        get: function () {
            return this.getStringAttribute('authentication');
        },
        set: function (value) {
            this._authentication = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewaySmbFileShare.prototype.resetAuthentication = function () {
        this._authentication = undefined;
    };
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "authenticationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authentication;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "bucketRegion", {
        get: function () {
            return this.getStringAttribute('bucket_region');
        },
        set: function (value) {
            this._bucketRegion = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewaySmbFileShare.prototype.resetBucketRegion = function () {
        this._bucketRegion = undefined;
    };
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "bucketRegionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucketRegion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "caseSensitivity", {
        get: function () {
            return this.getStringAttribute('case_sensitivity');
        },
        set: function (value) {
            this._caseSensitivity = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewaySmbFileShare.prototype.resetCaseSensitivity = function () {
        this._caseSensitivity = undefined;
    };
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "caseSensitivityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._caseSensitivity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "defaultStorageClass", {
        get: function () {
            return this.getStringAttribute('default_storage_class');
        },
        set: function (value) {
            this._defaultStorageClass = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewaySmbFileShare.prototype.resetDefaultStorageClass = function () {
        this._defaultStorageClass = undefined;
    };
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "defaultStorageClassInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultStorageClass;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "fileShareName", {
        get: function () {
            return this.getStringAttribute('file_share_name');
        },
        set: function (value) {
            this._fileShareName = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewaySmbFileShare.prototype.resetFileShareName = function () {
        this._fileShareName = undefined;
    };
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "fileShareNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fileShareName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "fileshareId", {
        // fileshare_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('fileshare_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "gatewayArn", {
        get: function () {
            return this.getStringAttribute('gateway_arn');
        },
        set: function (value) {
            this._gatewayArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "gatewayArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gatewayArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "guessMimeTypeEnabled", {
        get: function () {
            return this.getBooleanAttribute('guess_mime_type_enabled');
        },
        set: function (value) {
            this._guessMimeTypeEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewaySmbFileShare.prototype.resetGuessMimeTypeEnabled = function () {
        this._guessMimeTypeEnabled = undefined;
    };
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "guessMimeTypeEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._guessMimeTypeEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "invalidUserList", {
        get: function () {
            return this.getListAttribute('invalid_user_list');
        },
        set: function (value) {
            this._invalidUserList = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewaySmbFileShare.prototype.resetInvalidUserList = function () {
        this._invalidUserList = undefined;
    };
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "invalidUserListInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._invalidUserList;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "kmsEncrypted", {
        get: function () {
            return this.getBooleanAttribute('kms_encrypted');
        },
        set: function (value) {
            this._kmsEncrypted = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewaySmbFileShare.prototype.resetKmsEncrypted = function () {
        this._kmsEncrypted = undefined;
    };
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "kmsEncryptedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsEncrypted;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "kmsKeyArn", {
        get: function () {
            return this.getStringAttribute('kms_key_arn');
        },
        set: function (value) {
            this._kmsKeyArn = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewaySmbFileShare.prototype.resetKmsKeyArn = function () {
        this._kmsKeyArn = undefined;
    };
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "kmsKeyArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsKeyArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "locationArn", {
        get: function () {
            return this.getStringAttribute('location_arn');
        },
        set: function (value) {
            this._locationArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "locationArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._locationArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "notificationPolicy", {
        get: function () {
            return this.getStringAttribute('notification_policy');
        },
        set: function (value) {
            this._notificationPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewaySmbFileShare.prototype.resetNotificationPolicy = function () {
        this._notificationPolicy = undefined;
    };
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "notificationPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._notificationPolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "objectAcl", {
        get: function () {
            return this.getStringAttribute('object_acl');
        },
        set: function (value) {
            this._objectAcl = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewaySmbFileShare.prototype.resetObjectAcl = function () {
        this._objectAcl = undefined;
    };
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "objectAclInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._objectAcl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "oplocksEnabled", {
        get: function () {
            return this.getBooleanAttribute('oplocks_enabled');
        },
        set: function (value) {
            this._oplocksEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewaySmbFileShare.prototype.resetOplocksEnabled = function () {
        this._oplocksEnabled = undefined;
    };
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "oplocksEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._oplocksEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "path", {
        // path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "readOnly", {
        get: function () {
            return this.getBooleanAttribute('read_only');
        },
        set: function (value) {
            this._readOnly = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewaySmbFileShare.prototype.resetReadOnly = function () {
        this._readOnly = undefined;
    };
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "readOnlyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._readOnly;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "requesterPays", {
        get: function () {
            return this.getBooleanAttribute('requester_pays');
        },
        set: function (value) {
            this._requesterPays = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewaySmbFileShare.prototype.resetRequesterPays = function () {
        this._requesterPays = undefined;
    };
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "requesterPaysInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requesterPays;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "roleArn", {
        get: function () {
            return this.getStringAttribute('role_arn');
        },
        set: function (value) {
            this._roleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "roleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "smbAclEnabled", {
        get: function () {
            return this.getBooleanAttribute('smb_acl_enabled');
        },
        set: function (value) {
            this._smbAclEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewaySmbFileShare.prototype.resetSmbAclEnabled = function () {
        this._smbAclEnabled = undefined;
    };
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "smbAclEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._smbAclEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewaySmbFileShare.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewaySmbFileShare.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "validUserList", {
        get: function () {
            return this.getListAttribute('valid_user_list');
        },
        set: function (value) {
            this._validUserList = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewaySmbFileShare.prototype.resetValidUserList = function () {
        this._validUserList = undefined;
    };
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "validUserListInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._validUserList;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "vpcEndpointDnsName", {
        get: function () {
            return this.getStringAttribute('vpc_endpoint_dns_name');
        },
        set: function (value) {
            this._vpcEndpointDnsName = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewaySmbFileShare.prototype.resetVpcEndpointDnsName = function () {
        this._vpcEndpointDnsName = undefined;
    };
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "vpcEndpointDnsNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcEndpointDnsName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "cacheAttributes", {
        get: function () {
            return this.interpolationForAttribute('cache_attributes');
        },
        set: function (value) {
            this._cacheAttributes = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewaySmbFileShare.prototype.resetCacheAttributes = function () {
        this._cacheAttributes = undefined;
    };
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "cacheAttributesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cacheAttributes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewaySmbFileShare.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(StoragegatewaySmbFileShare.prototype, "timeoutsInput", {
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
    StoragegatewaySmbFileShare.prototype.synthesizeAttributes = function () {
        return {
            access_based_enumeration: cdktf.booleanToTerraform(this._accessBasedEnumeration),
            admin_user_list: cdktf.listMapper(cdktf.stringToTerraform)(this._adminUserList),
            audit_destination_arn: cdktf.stringToTerraform(this._auditDestinationArn),
            authentication: cdktf.stringToTerraform(this._authentication),
            bucket_region: cdktf.stringToTerraform(this._bucketRegion),
            case_sensitivity: cdktf.stringToTerraform(this._caseSensitivity),
            default_storage_class: cdktf.stringToTerraform(this._defaultStorageClass),
            file_share_name: cdktf.stringToTerraform(this._fileShareName),
            gateway_arn: cdktf.stringToTerraform(this._gatewayArn),
            guess_mime_type_enabled: cdktf.booleanToTerraform(this._guessMimeTypeEnabled),
            invalid_user_list: cdktf.listMapper(cdktf.stringToTerraform)(this._invalidUserList),
            kms_encrypted: cdktf.booleanToTerraform(this._kmsEncrypted),
            kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
            location_arn: cdktf.stringToTerraform(this._locationArn),
            notification_policy: cdktf.stringToTerraform(this._notificationPolicy),
            object_acl: cdktf.stringToTerraform(this._objectAcl),
            oplocks_enabled: cdktf.booleanToTerraform(this._oplocksEnabled),
            read_only: cdktf.booleanToTerraform(this._readOnly),
            requester_pays: cdktf.booleanToTerraform(this._requesterPays),
            role_arn: cdktf.stringToTerraform(this._roleArn),
            smb_acl_enabled: cdktf.booleanToTerraform(this._smbAclEnabled),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            valid_user_list: cdktf.listMapper(cdktf.stringToTerraform)(this._validUserList),
            vpc_endpoint_dns_name: cdktf.stringToTerraform(this._vpcEndpointDnsName),
            cache_attributes: cdktf.listMapper(storagegatewaySmbFileShareCacheAttributesToTerraform)(this._cacheAttributes),
            timeouts: storagegatewaySmbFileShareTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    StoragegatewaySmbFileShare.tfResourceType = "aws_storagegateway_smb_file_share";
    return StoragegatewaySmbFileShare;
}(cdktf.TerraformResource));
exports.StoragegatewaySmbFileShare = StoragegatewaySmbFileShare;
