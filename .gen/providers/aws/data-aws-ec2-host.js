"use strict";
// https://www.terraform.io/docs/providers/aws/d/ec2_host.html
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
exports.DataAwsEc2Host = void 0;
var cdktf = require("cdktf");
function dataAwsEc2HostFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_host.html aws_ec2_host}
*/
var DataAwsEc2Host = /** @class */ (function (_super) {
    __extends(DataAwsEc2Host, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_host.html aws_ec2_host} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2HostConfig = {}
    */
    function DataAwsEc2Host(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ec2_host',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._hostId = config.hostId;
        _this._tags = config.tags;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsEc2Host.prototype, "arn", {
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
    Object.defineProperty(DataAwsEc2Host.prototype, "autoPlacement", {
        // auto_placement - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('auto_placement');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2Host.prototype, "availabilityZone", {
        // availability_zone - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2Host.prototype, "cores", {
        // cores - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('cores');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2Host.prototype, "hostId", {
        get: function () {
            return this.getStringAttribute('host_id');
        },
        set: function (value) {
            this._hostId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2Host.prototype.resetHostId = function () {
        this._hostId = undefined;
    };
    Object.defineProperty(DataAwsEc2Host.prototype, "hostIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2Host.prototype, "hostRecovery", {
        // host_recovery - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host_recovery');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2Host.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2Host.prototype, "instanceFamily", {
        // instance_family - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('instance_family');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2Host.prototype, "instanceType", {
        // instance_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('instance_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2Host.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2Host.prototype, "sockets", {
        // sockets - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('sockets');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2Host.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2Host.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsEc2Host.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2Host.prototype, "totalVcpus", {
        // total_vcpus - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('total_vcpus');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2Host.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2Host.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsEc2Host.prototype, "filterInput", {
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
    DataAwsEc2Host.prototype.synthesizeAttributes = function () {
        return {
            host_id: cdktf.stringToTerraform(this._hostId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            filter: cdktf.listMapper(dataAwsEc2HostFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsEc2Host.tfResourceType = "aws_ec2_host";
    return DataAwsEc2Host;
}(cdktf.TerraformDataSource));
exports.DataAwsEc2Host = DataAwsEc2Host;
