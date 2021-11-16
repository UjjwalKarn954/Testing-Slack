"use strict";
// https://www.terraform.io/docs/providers/aws/d/directory_service_directory.html
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
exports.DataAwsDirectoryServiceDirectory = exports.DataAwsDirectoryServiceDirectoryVpcSettings = exports.DataAwsDirectoryServiceDirectoryConnectSettings = void 0;
var cdktf = require("cdktf");
var DataAwsDirectoryServiceDirectoryConnectSettings = /** @class */ (function (_super) {
    __extends(DataAwsDirectoryServiceDirectoryConnectSettings, _super);
    function DataAwsDirectoryServiceDirectoryConnectSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsDirectoryServiceDirectoryConnectSettings.prototype, "availabilityZones", {
        // availability_zones - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('availability_zones');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDirectoryServiceDirectoryConnectSettings.prototype, "connectIps", {
        // connect_ips - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('connect_ips');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDirectoryServiceDirectoryConnectSettings.prototype, "customerDnsIps", {
        // customer_dns_ips - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('customer_dns_ips');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDirectoryServiceDirectoryConnectSettings.prototype, "customerUsername", {
        // customer_username - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('customer_username');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDirectoryServiceDirectoryConnectSettings.prototype, "subnetIds", {
        // subnet_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('subnet_ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDirectoryServiceDirectoryConnectSettings.prototype, "vpcId", {
        // vpc_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsDirectoryServiceDirectoryConnectSettings;
}(cdktf.ComplexComputedList));
exports.DataAwsDirectoryServiceDirectoryConnectSettings = DataAwsDirectoryServiceDirectoryConnectSettings;
var DataAwsDirectoryServiceDirectoryVpcSettings = /** @class */ (function (_super) {
    __extends(DataAwsDirectoryServiceDirectoryVpcSettings, _super);
    function DataAwsDirectoryServiceDirectoryVpcSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsDirectoryServiceDirectoryVpcSettings.prototype, "availabilityZones", {
        // availability_zones - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('availability_zones');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDirectoryServiceDirectoryVpcSettings.prototype, "subnetIds", {
        // subnet_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('subnet_ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDirectoryServiceDirectoryVpcSettings.prototype, "vpcId", {
        // vpc_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsDirectoryServiceDirectoryVpcSettings;
}(cdktf.ComplexComputedList));
exports.DataAwsDirectoryServiceDirectoryVpcSettings = DataAwsDirectoryServiceDirectoryVpcSettings;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/directory_service_directory.html aws_directory_service_directory}
*/
var DataAwsDirectoryServiceDirectory = /** @class */ (function (_super) {
    __extends(DataAwsDirectoryServiceDirectory, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/directory_service_directory.html aws_directory_service_directory} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDirectoryServiceDirectoryConfig
    */
    function DataAwsDirectoryServiceDirectory(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_directory_service_directory',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._directoryId = config.directoryId;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsDirectoryServiceDirectory.prototype, "accessUrl", {
        // ==========
        // ATTRIBUTES
        // ==========
        // access_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('access_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDirectoryServiceDirectory.prototype, "alias", {
        // alias - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('alias');
        },
        enumerable: false,
        configurable: true
    });
    // connect_settings - computed: true, optional: false, required: false
    DataAwsDirectoryServiceDirectory.prototype.connectSettings = function (index) {
        return new DataAwsDirectoryServiceDirectoryConnectSettings(this, 'connect_settings', index);
    };
    Object.defineProperty(DataAwsDirectoryServiceDirectory.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDirectoryServiceDirectory.prototype, "directoryId", {
        get: function () {
            return this.getStringAttribute('directory_id');
        },
        set: function (value) {
            this._directoryId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDirectoryServiceDirectory.prototype, "directoryIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._directoryId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDirectoryServiceDirectory.prototype, "dnsIpAddresses", {
        // dns_ip_addresses - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('dns_ip_addresses');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDirectoryServiceDirectory.prototype, "edition", {
        // edition - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('edition');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDirectoryServiceDirectory.prototype, "enableSso", {
        // enable_sso - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enable_sso');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDirectoryServiceDirectory.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDirectoryServiceDirectory.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDirectoryServiceDirectory.prototype, "securityGroupId", {
        // security_group_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('security_group_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDirectoryServiceDirectory.prototype, "shortName", {
        // short_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('short_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDirectoryServiceDirectory.prototype, "size", {
        // size - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDirectoryServiceDirectory.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsDirectoryServiceDirectory.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsDirectoryServiceDirectory.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDirectoryServiceDirectory.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    // vpc_settings - computed: true, optional: false, required: false
    DataAwsDirectoryServiceDirectory.prototype.vpcSettings = function (index) {
        return new DataAwsDirectoryServiceDirectoryVpcSettings(this, 'vpc_settings', index);
    };
    // =========
    // SYNTHESIS
    // =========
    DataAwsDirectoryServiceDirectory.prototype.synthesizeAttributes = function () {
        return {
            directory_id: cdktf.stringToTerraform(this._directoryId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsDirectoryServiceDirectory.tfResourceType = "aws_directory_service_directory";
    return DataAwsDirectoryServiceDirectory;
}(cdktf.TerraformDataSource));
exports.DataAwsDirectoryServiceDirectory = DataAwsDirectoryServiceDirectory;
