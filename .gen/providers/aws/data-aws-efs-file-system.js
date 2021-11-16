"use strict";
// https://www.terraform.io/docs/providers/aws/d/efs_file_system.html
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
exports.DataAwsEfsFileSystem = exports.DataAwsEfsFileSystemLifecyclePolicy = void 0;
var cdktf = require("cdktf");
var DataAwsEfsFileSystemLifecyclePolicy = /** @class */ (function (_super) {
    __extends(DataAwsEfsFileSystemLifecyclePolicy, _super);
    function DataAwsEfsFileSystemLifecyclePolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsEfsFileSystemLifecyclePolicy.prototype, "transitionToIa", {
        // transition_to_ia - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('transition_to_ia');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsFileSystemLifecyclePolicy.prototype, "transitionToPrimaryStorageClass", {
        // transition_to_primary_storage_class - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('transition_to_primary_storage_class');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsEfsFileSystemLifecyclePolicy;
}(cdktf.ComplexComputedList));
exports.DataAwsEfsFileSystemLifecyclePolicy = DataAwsEfsFileSystemLifecyclePolicy;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system.html aws_efs_file_system}
*/
var DataAwsEfsFileSystem = /** @class */ (function (_super) {
    __extends(DataAwsEfsFileSystem, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system.html aws_efs_file_system} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEfsFileSystemConfig = {}
    */
    function DataAwsEfsFileSystem(scope, id, config) {
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
        _this._creationToken = config.creationToken;
        _this._fileSystemId = config.fileSystemId;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsEfsFileSystem.prototype, "arn", {
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
    Object.defineProperty(DataAwsEfsFileSystem.prototype, "availabilityZoneId", {
        // availability_zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('availability_zone_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsFileSystem.prototype, "availabilityZoneName", {
        // availability_zone_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('availability_zone_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsFileSystem.prototype, "creationToken", {
        get: function () {
            return this.getStringAttribute('creation_token');
        },
        set: function (value) {
            this._creationToken = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEfsFileSystem.prototype.resetCreationToken = function () {
        this._creationToken = undefined;
    };
    Object.defineProperty(DataAwsEfsFileSystem.prototype, "creationTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._creationToken;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsFileSystem.prototype, "dnsName", {
        // dns_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dns_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsFileSystem.prototype, "encrypted", {
        // encrypted - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('encrypted');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsFileSystem.prototype, "fileSystemId", {
        get: function () {
            return this.getStringAttribute('file_system_id');
        },
        set: function (value) {
            this._fileSystemId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEfsFileSystem.prototype.resetFileSystemId = function () {
        this._fileSystemId = undefined;
    };
    Object.defineProperty(DataAwsEfsFileSystem.prototype, "fileSystemIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fileSystemId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsFileSystem.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsFileSystem.prototype, "kmsKeyId", {
        // kms_key_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        enumerable: false,
        configurable: true
    });
    // lifecycle_policy - computed: true, optional: false, required: false
    DataAwsEfsFileSystem.prototype.lifecyclePolicy = function (index) {
        return new DataAwsEfsFileSystemLifecyclePolicy(this, 'lifecycle_policy', index);
    };
    Object.defineProperty(DataAwsEfsFileSystem.prototype, "performanceMode", {
        // performance_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('performance_mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsFileSystem.prototype, "provisionedThroughputInMibps", {
        // provisioned_throughput_in_mibps - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('provisioned_throughput_in_mibps');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsFileSystem.prototype, "sizeInBytes", {
        // size_in_bytes - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('size_in_bytes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsFileSystem.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEfsFileSystem.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsEfsFileSystem.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsFileSystem.prototype, "throughputMode", {
        // throughput_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('throughput_mode');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsEfsFileSystem.prototype.synthesizeAttributes = function () {
        return {
            creation_token: cdktf.stringToTerraform(this._creationToken),
            file_system_id: cdktf.stringToTerraform(this._fileSystemId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsEfsFileSystem.tfResourceType = "aws_efs_file_system";
    return DataAwsEfsFileSystem;
}(cdktf.TerraformDataSource));
exports.DataAwsEfsFileSystem = DataAwsEfsFileSystem;
