"use strict";
// https://www.terraform.io/docs/providers/aws/r/ec2_availability_zone_group.html
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
exports.Ec2AvailabilityZoneGroup = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_availability_zone_group.html aws_ec2_availability_zone_group}
*/
var Ec2AvailabilityZoneGroup = /** @class */ (function (_super) {
    __extends(Ec2AvailabilityZoneGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_availability_zone_group.html aws_ec2_availability_zone_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2AvailabilityZoneGroupConfig
    */
    function Ec2AvailabilityZoneGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ec2_availability_zone_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._groupName = config.groupName;
        _this._optInStatus = config.optInStatus;
        return _this;
    }
    Object.defineProperty(Ec2AvailabilityZoneGroup.prototype, "groupName", {
        get: function () {
            return this.getStringAttribute('group_name');
        },
        set: function (value) {
            this._groupName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2AvailabilityZoneGroup.prototype, "groupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._groupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2AvailabilityZoneGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2AvailabilityZoneGroup.prototype, "optInStatus", {
        get: function () {
            return this.getStringAttribute('opt_in_status');
        },
        set: function (value) {
            this._optInStatus = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2AvailabilityZoneGroup.prototype, "optInStatusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._optInStatus;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Ec2AvailabilityZoneGroup.prototype.synthesizeAttributes = function () {
        return {
            group_name: cdktf.stringToTerraform(this._groupName),
            opt_in_status: cdktf.stringToTerraform(this._optInStatus)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Ec2AvailabilityZoneGroup.tfResourceType = "aws_ec2_availability_zone_group";
    return Ec2AvailabilityZoneGroup;
}(cdktf.TerraformResource));
exports.Ec2AvailabilityZoneGroup = Ec2AvailabilityZoneGroup;
