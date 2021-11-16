"use strict";
// https://www.terraform.io/docs/providers/aws/d/ami.html
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
exports.DataAwsAmi = exports.DataAwsAmiProductCodes = exports.DataAwsAmiBlockDeviceMappings = void 0;
var cdktf = require("cdktf");
var DataAwsAmiBlockDeviceMappings = /** @class */ (function (_super) {
    __extends(DataAwsAmiBlockDeviceMappings, _super);
    function DataAwsAmiBlockDeviceMappings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsAmiBlockDeviceMappings.prototype, "deviceName", {
        // device_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('device_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmiBlockDeviceMappings.prototype, "ebs", {
        // ebs - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('ebs');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmiBlockDeviceMappings.prototype, "noDevice", {
        // no_device - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('no_device');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmiBlockDeviceMappings.prototype, "virtualName", {
        // virtual_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('virtual_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsAmiBlockDeviceMappings;
}(cdktf.ComplexComputedList));
exports.DataAwsAmiBlockDeviceMappings = DataAwsAmiBlockDeviceMappings;
var DataAwsAmiProductCodes = /** @class */ (function (_super) {
    __extends(DataAwsAmiProductCodes, _super);
    function DataAwsAmiProductCodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsAmiProductCodes.prototype, "productCodeId", {
        // product_code_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('product_code_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmiProductCodes.prototype, "productCodeType", {
        // product_code_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('product_code_type');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsAmiProductCodes;
}(cdktf.ComplexComputedList));
exports.DataAwsAmiProductCodes = DataAwsAmiProductCodes;
function dataAwsAmiFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ami.html aws_ami}
*/
var DataAwsAmi = /** @class */ (function (_super) {
    __extends(DataAwsAmi, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ami.html aws_ami} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAmiConfig
    */
    function DataAwsAmi(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ami',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._executableUsers = config.executableUsers;
        _this._mostRecent = config.mostRecent;
        _this._nameRegex = config.nameRegex;
        _this._owners = config.owners;
        _this._tags = config.tags;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsAmi.prototype, "architecture", {
        // ==========
        // ATTRIBUTES
        // ==========
        // architecture - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('architecture');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmi.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    // block_device_mappings - computed: true, optional: false, required: false
    DataAwsAmi.prototype.blockDeviceMappings = function (index) {
        return new DataAwsAmiBlockDeviceMappings(this, 'block_device_mappings', index);
    };
    Object.defineProperty(DataAwsAmi.prototype, "creationDate", {
        // creation_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('creation_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmi.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmi.prototype, "enaSupport", {
        // ena_support - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ena_support');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmi.prototype, "executableUsers", {
        get: function () {
            return this.getListAttribute('executable_users');
        },
        set: function (value) {
            this._executableUsers = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAmi.prototype.resetExecutableUsers = function () {
        this._executableUsers = undefined;
    };
    Object.defineProperty(DataAwsAmi.prototype, "executableUsersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._executableUsers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmi.prototype, "hypervisor", {
        // hypervisor - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hypervisor');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmi.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmi.prototype, "imageId", {
        // image_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('image_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmi.prototype, "imageLocation", {
        // image_location - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('image_location');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmi.prototype, "imageOwnerAlias", {
        // image_owner_alias - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('image_owner_alias');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmi.prototype, "imageType", {
        // image_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('image_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmi.prototype, "kernelId", {
        // kernel_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kernel_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmi.prototype, "mostRecent", {
        get: function () {
            return this.getBooleanAttribute('most_recent');
        },
        set: function (value) {
            this._mostRecent = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAmi.prototype.resetMostRecent = function () {
        this._mostRecent = undefined;
    };
    Object.defineProperty(DataAwsAmi.prototype, "mostRecentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mostRecent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmi.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmi.prototype, "nameRegex", {
        get: function () {
            return this.getStringAttribute('name_regex');
        },
        set: function (value) {
            this._nameRegex = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAmi.prototype.resetNameRegex = function () {
        this._nameRegex = undefined;
    };
    Object.defineProperty(DataAwsAmi.prototype, "nameRegexInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._nameRegex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmi.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmi.prototype, "owners", {
        get: function () {
            return this.getListAttribute('owners');
        },
        set: function (value) {
            this._owners = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmi.prototype, "ownersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._owners;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmi.prototype, "platform", {
        // platform - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('platform');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmi.prototype, "platformDetails", {
        // platform_details - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('platform_details');
        },
        enumerable: false,
        configurable: true
    });
    // product_codes - computed: true, optional: false, required: false
    DataAwsAmi.prototype.productCodes = function (index) {
        return new DataAwsAmiProductCodes(this, 'product_codes', index);
    };
    Object.defineProperty(DataAwsAmi.prototype, "public", {
        // public - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('public');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmi.prototype, "ramdiskId", {
        // ramdisk_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ramdisk_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmi.prototype, "rootDeviceName", {
        // root_device_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('root_device_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmi.prototype, "rootDeviceType", {
        // root_device_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('root_device_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmi.prototype, "rootSnapshotId", {
        // root_snapshot_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('root_snapshot_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmi.prototype, "sriovNetSupport", {
        // sriov_net_support - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sriov_net_support');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmi.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    // state_reason - computed: true, optional: false, required: false
    DataAwsAmi.prototype.stateReason = function (key) {
        return new cdktf.StringMap(this, 'state_reason').lookup(key);
    };
    Object.defineProperty(DataAwsAmi.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAmi.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsAmi.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmi.prototype, "usageOperation", {
        // usage_operation - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('usage_operation');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmi.prototype, "virtualizationType", {
        // virtualization_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('virtualization_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmi.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAmi.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsAmi.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsAmi.prototype.synthesizeAttributes = function () {
        return {
            executable_users: cdktf.listMapper(cdktf.stringToTerraform)(this._executableUsers),
            most_recent: cdktf.booleanToTerraform(this._mostRecent),
            name_regex: cdktf.stringToTerraform(this._nameRegex),
            owners: cdktf.listMapper(cdktf.stringToTerraform)(this._owners),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            filter: cdktf.listMapper(dataAwsAmiFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsAmi.tfResourceType = "aws_ami";
    return DataAwsAmi;
}(cdktf.TerraformDataSource));
exports.DataAwsAmi = DataAwsAmi;
