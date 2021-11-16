"use strict";
// https://www.terraform.io/docs/providers/aws/r/efs_mount_target.html
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
exports.EfsMountTarget = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/efs_mount_target.html aws_efs_mount_target}
*/
var EfsMountTarget = /** @class */ (function (_super) {
    __extends(EfsMountTarget, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/efs_mount_target.html aws_efs_mount_target} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EfsMountTargetConfig
    */
    function EfsMountTarget(scope, id, config) {
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
        _this._fileSystemId = config.fileSystemId;
        _this._ipAddress = config.ipAddress;
        _this._securityGroups = config.securityGroups;
        _this._subnetId = config.subnetId;
        return _this;
    }
    Object.defineProperty(EfsMountTarget.prototype, "availabilityZoneId", {
        // ==========
        // ATTRIBUTES
        // ==========
        // availability_zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('availability_zone_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsMountTarget.prototype, "availabilityZoneName", {
        // availability_zone_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('availability_zone_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsMountTarget.prototype, "dnsName", {
        // dns_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dns_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsMountTarget.prototype, "fileSystemArn", {
        // file_system_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('file_system_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsMountTarget.prototype, "fileSystemId", {
        get: function () {
            return this.getStringAttribute('file_system_id');
        },
        set: function (value) {
            this._fileSystemId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsMountTarget.prototype, "fileSystemIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fileSystemId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsMountTarget.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsMountTarget.prototype, "ipAddress", {
        get: function () {
            return this.getStringAttribute('ip_address');
        },
        set: function (value) {
            this._ipAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    EfsMountTarget.prototype.resetIpAddress = function () {
        this._ipAddress = undefined;
    };
    Object.defineProperty(EfsMountTarget.prototype, "ipAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipAddress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsMountTarget.prototype, "mountTargetDnsName", {
        // mount_target_dns_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mount_target_dns_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsMountTarget.prototype, "networkInterfaceId", {
        // network_interface_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('network_interface_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsMountTarget.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsMountTarget.prototype, "securityGroups", {
        get: function () {
            return this.getListAttribute('security_groups');
        },
        set: function (value) {
            this._securityGroups = value;
        },
        enumerable: false,
        configurable: true
    });
    EfsMountTarget.prototype.resetSecurityGroups = function () {
        this._securityGroups = undefined;
    };
    Object.defineProperty(EfsMountTarget.prototype, "securityGroupsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityGroups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsMountTarget.prototype, "subnetId", {
        get: function () {
            return this.getStringAttribute('subnet_id');
        },
        set: function (value) {
            this._subnetId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsMountTarget.prototype, "subnetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    EfsMountTarget.prototype.synthesizeAttributes = function () {
        return {
            file_system_id: cdktf.stringToTerraform(this._fileSystemId),
            ip_address: cdktf.stringToTerraform(this._ipAddress),
            security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
            subnet_id: cdktf.stringToTerraform(this._subnetId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    EfsMountTarget.tfResourceType = "aws_efs_mount_target";
    return EfsMountTarget;
}(cdktf.TerraformResource));
exports.EfsMountTarget = EfsMountTarget;
