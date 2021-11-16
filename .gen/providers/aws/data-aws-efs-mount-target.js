"use strict";
// https://www.terraform.io/docs/providers/aws/d/efs_mount_target.html
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
exports.DataAwsEfsMountTarget = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target.html aws_efs_mount_target}
*/
var DataAwsEfsMountTarget = /** @class */ (function (_super) {
    __extends(DataAwsEfsMountTarget, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target.html aws_efs_mount_target} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEfsMountTargetConfig = {}
    */
    function DataAwsEfsMountTarget(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_efs_mount_target',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._accessPointId = config.accessPointId;
        _this._fileSystemId = config.fileSystemId;
        _this._mountTargetId = config.mountTargetId;
        return _this;
    }
    Object.defineProperty(DataAwsEfsMountTarget.prototype, "accessPointId", {
        get: function () {
            return this.getStringAttribute('access_point_id');
        },
        set: function (value) {
            this._accessPointId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEfsMountTarget.prototype.resetAccessPointId = function () {
        this._accessPointId = undefined;
    };
    Object.defineProperty(DataAwsEfsMountTarget.prototype, "accessPointIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessPointId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsMountTarget.prototype, "availabilityZoneId", {
        // availability_zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('availability_zone_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsMountTarget.prototype, "availabilityZoneName", {
        // availability_zone_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('availability_zone_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsMountTarget.prototype, "dnsName", {
        // dns_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dns_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsMountTarget.prototype, "fileSystemArn", {
        // file_system_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('file_system_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsMountTarget.prototype, "fileSystemId", {
        get: function () {
            return this.getStringAttribute('file_system_id');
        },
        set: function (value) {
            this._fileSystemId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEfsMountTarget.prototype.resetFileSystemId = function () {
        this._fileSystemId = undefined;
    };
    Object.defineProperty(DataAwsEfsMountTarget.prototype, "fileSystemIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fileSystemId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsMountTarget.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsMountTarget.prototype, "ipAddress", {
        // ip_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsMountTarget.prototype, "mountTargetDnsName", {
        // mount_target_dns_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mount_target_dns_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsMountTarget.prototype, "mountTargetId", {
        get: function () {
            return this.getStringAttribute('mount_target_id');
        },
        set: function (value) {
            this._mountTargetId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEfsMountTarget.prototype.resetMountTargetId = function () {
        this._mountTargetId = undefined;
    };
    Object.defineProperty(DataAwsEfsMountTarget.prototype, "mountTargetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mountTargetId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsMountTarget.prototype, "networkInterfaceId", {
        // network_interface_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('network_interface_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsMountTarget.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsMountTarget.prototype, "securityGroups", {
        // security_groups - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('security_groups');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEfsMountTarget.prototype, "subnetId", {
        // subnet_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('subnet_id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsEfsMountTarget.prototype.synthesizeAttributes = function () {
        return {
            access_point_id: cdktf.stringToTerraform(this._accessPointId),
            file_system_id: cdktf.stringToTerraform(this._fileSystemId),
            mount_target_id: cdktf.stringToTerraform(this._mountTargetId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsEfsMountTarget.tfResourceType = "aws_efs_mount_target";
    return DataAwsEfsMountTarget;
}(cdktf.TerraformDataSource));
exports.DataAwsEfsMountTarget = DataAwsEfsMountTarget;
