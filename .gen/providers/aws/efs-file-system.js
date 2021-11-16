"use strict";
// https://www.terraform.io/docs/providers/aws/r/efs_file_system.html
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
exports.EfsFileSystem = exports.EfsFileSystemSizeInBytes = void 0;
var cdktf = require("cdktf");
var EfsFileSystemSizeInBytes = /** @class */ (function (_super) {
    __extends(EfsFileSystemSizeInBytes, _super);
    function EfsFileSystemSizeInBytes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EfsFileSystemSizeInBytes.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsFileSystemSizeInBytes.prototype, "valueInIa", {
        // value_in_ia - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('value_in_ia');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsFileSystemSizeInBytes.prototype, "valueInStandard", {
        // value_in_standard - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('value_in_standard');
        },
        enumerable: false,
        configurable: true
    });
    return EfsFileSystemSizeInBytes;
}(cdktf.ComplexComputedList));
exports.EfsFileSystemSizeInBytes = EfsFileSystemSizeInBytes;
function efsFileSystemLifecyclePolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        transition_to_ia: cdktf.stringToTerraform(struct.transitionToIa),
        transition_to_primary_storage_class: cdktf.stringToTerraform(struct.transitionToPrimaryStorageClass)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html aws_efs_file_system}
*/
var EfsFileSystem = /** @class */ (function (_super) {
    __extends(EfsFileSystem, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system.html aws_efs_file_system} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EfsFileSystemConfig = {}
    */
    function EfsFileSystem(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_efs_file_system',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._availabilityZoneName = config.availabilityZoneName;
        _this._creationToken = config.creationToken;
        _this._encrypted = config.encrypted;
        _this._kmsKeyId = config.kmsKeyId;
        _this._performanceMode = config.performanceMode;
        _this._provisionedThroughputInMibps = config.provisionedThroughputInMibps;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._throughputMode = config.throughputMode;
        _this._lifecyclePolicy = config.lifecyclePolicy;
        return _this;
    }
    Object.defineProperty(EfsFileSystem.prototype, "arn", {
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
    Object.defineProperty(EfsFileSystem.prototype, "availabilityZoneId", {
        // availability_zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('availability_zone_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsFileSystem.prototype, "availabilityZoneName", {
        get: function () {
            return this.getStringAttribute('availability_zone_name');
        },
        set: function (value) {
            this._availabilityZoneName = value;
        },
        enumerable: false,
        configurable: true
    });
    EfsFileSystem.prototype.resetAvailabilityZoneName = function () {
        this._availabilityZoneName = undefined;
    };
    Object.defineProperty(EfsFileSystem.prototype, "availabilityZoneNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._availabilityZoneName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsFileSystem.prototype, "creationToken", {
        get: function () {
            return this.getStringAttribute('creation_token');
        },
        set: function (value) {
            this._creationToken = value;
        },
        enumerable: false,
        configurable: true
    });
    EfsFileSystem.prototype.resetCreationToken = function () {
        this._creationToken = undefined;
    };
    Object.defineProperty(EfsFileSystem.prototype, "creationTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._creationToken;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsFileSystem.prototype, "dnsName", {
        // dns_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dns_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsFileSystem.prototype, "encrypted", {
        get: function () {
            return this.getBooleanAttribute('encrypted');
        },
        set: function (value) {
            this._encrypted = value;
        },
        enumerable: false,
        configurable: true
    });
    EfsFileSystem.prototype.resetEncrypted = function () {
        this._encrypted = undefined;
    };
    Object.defineProperty(EfsFileSystem.prototype, "encryptedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._encrypted;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsFileSystem.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsFileSystem.prototype, "kmsKeyId", {
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        set: function (value) {
            this._kmsKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    EfsFileSystem.prototype.resetKmsKeyId = function () {
        this._kmsKeyId = undefined;
    };
    Object.defineProperty(EfsFileSystem.prototype, "kmsKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsFileSystem.prototype, "numberOfMountTargets", {
        // number_of_mount_targets - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('number_of_mount_targets');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsFileSystem.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsFileSystem.prototype, "performanceMode", {
        get: function () {
            return this.getStringAttribute('performance_mode');
        },
        set: function (value) {
            this._performanceMode = value;
        },
        enumerable: false,
        configurable: true
    });
    EfsFileSystem.prototype.resetPerformanceMode = function () {
        this._performanceMode = undefined;
    };
    Object.defineProperty(EfsFileSystem.prototype, "performanceModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._performanceMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsFileSystem.prototype, "provisionedThroughputInMibps", {
        get: function () {
            return this.getNumberAttribute('provisioned_throughput_in_mibps');
        },
        set: function (value) {
            this._provisionedThroughputInMibps = value;
        },
        enumerable: false,
        configurable: true
    });
    EfsFileSystem.prototype.resetProvisionedThroughputInMibps = function () {
        this._provisionedThroughputInMibps = undefined;
    };
    Object.defineProperty(EfsFileSystem.prototype, "provisionedThroughputInMibpsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._provisionedThroughputInMibps;
        },
        enumerable: false,
        configurable: true
    });
    // size_in_bytes - computed: true, optional: false, required: false
    EfsFileSystem.prototype.sizeInBytes = function (index) {
        return new EfsFileSystemSizeInBytes(this, 'size_in_bytes', index);
    };
    Object.defineProperty(EfsFileSystem.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    EfsFileSystem.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(EfsFileSystem.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsFileSystem.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    EfsFileSystem.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(EfsFileSystem.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsFileSystem.prototype, "throughputMode", {
        get: function () {
            return this.getStringAttribute('throughput_mode');
        },
        set: function (value) {
            this._throughputMode = value;
        },
        enumerable: false,
        configurable: true
    });
    EfsFileSystem.prototype.resetThroughputMode = function () {
        this._throughputMode = undefined;
    };
    Object.defineProperty(EfsFileSystem.prototype, "throughputModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._throughputMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsFileSystem.prototype, "lifecyclePolicy", {
        get: function () {
            return this.interpolationForAttribute('lifecycle_policy');
        },
        set: function (value) {
            this._lifecyclePolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    EfsFileSystem.prototype.resetLifecyclePolicy = function () {
        this._lifecyclePolicy = undefined;
    };
    Object.defineProperty(EfsFileSystem.prototype, "lifecyclePolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lifecyclePolicy;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    EfsFileSystem.prototype.synthesizeAttributes = function () {
        return {
            availability_zone_name: cdktf.stringToTerraform(this._availabilityZoneName),
            creation_token: cdktf.stringToTerraform(this._creationToken),
            encrypted: cdktf.booleanToTerraform(this._encrypted),
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            performance_mode: cdktf.stringToTerraform(this._performanceMode),
            provisioned_throughput_in_mibps: cdktf.numberToTerraform(this._provisionedThroughputInMibps),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            throughput_mode: cdktf.stringToTerraform(this._throughputMode),
            lifecycle_policy: cdktf.listMapper(efsFileSystemLifecyclePolicyToTerraform)(this._lifecyclePolicy)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    EfsFileSystem.tfResourceType = "aws_efs_file_system";
    return EfsFileSystem;
}(cdktf.TerraformResource));
exports.EfsFileSystem = EfsFileSystem;
