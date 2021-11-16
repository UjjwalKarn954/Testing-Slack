"use strict";
// https://www.terraform.io/docs/providers/aws/d/route53_zone.html
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
exports.DataAwsRoute53Zone = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/route53_zone.html aws_route53_zone}
*/
var DataAwsRoute53Zone = /** @class */ (function (_super) {
    __extends(DataAwsRoute53Zone, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/route53_zone.html aws_route53_zone} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRoute53ZoneConfig = {}
    */
    function DataAwsRoute53Zone(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_route53_zone',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._privateZone = config.privateZone;
        _this._resourceRecordSetCount = config.resourceRecordSetCount;
        _this._tags = config.tags;
        _this._vpcId = config.vpcId;
        _this._zoneId = config.zoneId;
        return _this;
    }
    Object.defineProperty(DataAwsRoute53Zone.prototype, "arn", {
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
    Object.defineProperty(DataAwsRoute53Zone.prototype, "callerReference", {
        // caller_reference - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('caller_reference');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute53Zone.prototype, "comment", {
        // comment - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('comment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute53Zone.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute53Zone.prototype, "linkedServiceDescription", {
        // linked_service_description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('linked_service_description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute53Zone.prototype, "linkedServicePrincipal", {
        // linked_service_principal - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('linked_service_principal');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute53Zone.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRoute53Zone.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataAwsRoute53Zone.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute53Zone.prototype, "nameServers", {
        // name_servers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('name_servers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute53Zone.prototype, "privateZone", {
        get: function () {
            return this.getBooleanAttribute('private_zone');
        },
        set: function (value) {
            this._privateZone = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRoute53Zone.prototype.resetPrivateZone = function () {
        this._privateZone = undefined;
    };
    Object.defineProperty(DataAwsRoute53Zone.prototype, "privateZoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._privateZone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute53Zone.prototype, "resourceRecordSetCount", {
        get: function () {
            return this.getNumberAttribute('resource_record_set_count');
        },
        set: function (value) {
            this._resourceRecordSetCount = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRoute53Zone.prototype.resetResourceRecordSetCount = function () {
        this._resourceRecordSetCount = undefined;
    };
    Object.defineProperty(DataAwsRoute53Zone.prototype, "resourceRecordSetCountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceRecordSetCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute53Zone.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRoute53Zone.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsRoute53Zone.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute53Zone.prototype, "vpcId", {
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        set: function (value) {
            this._vpcId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRoute53Zone.prototype.resetVpcId = function () {
        this._vpcId = undefined;
    };
    Object.defineProperty(DataAwsRoute53Zone.prototype, "vpcIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute53Zone.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRoute53Zone.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataAwsRoute53Zone.prototype, "zoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsRoute53Zone.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            private_zone: cdktf.booleanToTerraform(this._privateZone),
            resource_record_set_count: cdktf.numberToTerraform(this._resourceRecordSetCount),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            vpc_id: cdktf.stringToTerraform(this._vpcId),
            zone_id: cdktf.stringToTerraform(this._zoneId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsRoute53Zone.tfResourceType = "aws_route53_zone";
    return DataAwsRoute53Zone;
}(cdktf.TerraformDataSource));
exports.DataAwsRoute53Zone = DataAwsRoute53Zone;
