"use strict";
// https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html
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
exports.Ec2CapacityReservation = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html aws_ec2_capacity_reservation}
*/
var Ec2CapacityReservation = /** @class */ (function (_super) {
    __extends(Ec2CapacityReservation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html aws_ec2_capacity_reservation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2CapacityReservationConfig
    */
    function Ec2CapacityReservation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ec2_capacity_reservation',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._availabilityZone = config.availabilityZone;
        _this._ebsOptimized = config.ebsOptimized;
        _this._endDate = config.endDate;
        _this._endDateType = config.endDateType;
        _this._ephemeralStorage = config.ephemeralStorage;
        _this._instanceCount = config.instanceCount;
        _this._instanceMatchCriteria = config.instanceMatchCriteria;
        _this._instancePlatform = config.instancePlatform;
        _this._instanceType = config.instanceType;
        _this._outpostArn = config.outpostArn;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._tenancy = config.tenancy;
        return _this;
    }
    Object.defineProperty(Ec2CapacityReservation.prototype, "arn", {
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
    Object.defineProperty(Ec2CapacityReservation.prototype, "availabilityZone", {
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        set: function (value) {
            this._availabilityZone = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2CapacityReservation.prototype, "availabilityZoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._availabilityZone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2CapacityReservation.prototype, "ebsOptimized", {
        get: function () {
            return this.getBooleanAttribute('ebs_optimized');
        },
        set: function (value) {
            this._ebsOptimized = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2CapacityReservation.prototype.resetEbsOptimized = function () {
        this._ebsOptimized = undefined;
    };
    Object.defineProperty(Ec2CapacityReservation.prototype, "ebsOptimizedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ebsOptimized;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2CapacityReservation.prototype, "endDate", {
        get: function () {
            return this.getStringAttribute('end_date');
        },
        set: function (value) {
            this._endDate = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2CapacityReservation.prototype.resetEndDate = function () {
        this._endDate = undefined;
    };
    Object.defineProperty(Ec2CapacityReservation.prototype, "endDateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endDate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2CapacityReservation.prototype, "endDateType", {
        get: function () {
            return this.getStringAttribute('end_date_type');
        },
        set: function (value) {
            this._endDateType = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2CapacityReservation.prototype.resetEndDateType = function () {
        this._endDateType = undefined;
    };
    Object.defineProperty(Ec2CapacityReservation.prototype, "endDateTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endDateType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2CapacityReservation.prototype, "ephemeralStorage", {
        get: function () {
            return this.getBooleanAttribute('ephemeral_storage');
        },
        set: function (value) {
            this._ephemeralStorage = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2CapacityReservation.prototype.resetEphemeralStorage = function () {
        this._ephemeralStorage = undefined;
    };
    Object.defineProperty(Ec2CapacityReservation.prototype, "ephemeralStorageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ephemeralStorage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2CapacityReservation.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2CapacityReservation.prototype, "instanceCount", {
        get: function () {
            return this.getNumberAttribute('instance_count');
        },
        set: function (value) {
            this._instanceCount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2CapacityReservation.prototype, "instanceCountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2CapacityReservation.prototype, "instanceMatchCriteria", {
        get: function () {
            return this.getStringAttribute('instance_match_criteria');
        },
        set: function (value) {
            this._instanceMatchCriteria = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2CapacityReservation.prototype.resetInstanceMatchCriteria = function () {
        this._instanceMatchCriteria = undefined;
    };
    Object.defineProperty(Ec2CapacityReservation.prototype, "instanceMatchCriteriaInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceMatchCriteria;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2CapacityReservation.prototype, "instancePlatform", {
        get: function () {
            return this.getStringAttribute('instance_platform');
        },
        set: function (value) {
            this._instancePlatform = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2CapacityReservation.prototype, "instancePlatformInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instancePlatform;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2CapacityReservation.prototype, "instanceType", {
        get: function () {
            return this.getStringAttribute('instance_type');
        },
        set: function (value) {
            this._instanceType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2CapacityReservation.prototype, "instanceTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2CapacityReservation.prototype, "outpostArn", {
        get: function () {
            return this.getStringAttribute('outpost_arn');
        },
        set: function (value) {
            this._outpostArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2CapacityReservation.prototype.resetOutpostArn = function () {
        this._outpostArn = undefined;
    };
    Object.defineProperty(Ec2CapacityReservation.prototype, "outpostArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._outpostArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2CapacityReservation.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2CapacityReservation.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2CapacityReservation.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Ec2CapacityReservation.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2CapacityReservation.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2CapacityReservation.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Ec2CapacityReservation.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2CapacityReservation.prototype, "tenancy", {
        get: function () {
            return this.getStringAttribute('tenancy');
        },
        set: function (value) {
            this._tenancy = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2CapacityReservation.prototype.resetTenancy = function () {
        this._tenancy = undefined;
    };
    Object.defineProperty(Ec2CapacityReservation.prototype, "tenancyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tenancy;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Ec2CapacityReservation.prototype.synthesizeAttributes = function () {
        return {
            availability_zone: cdktf.stringToTerraform(this._availabilityZone),
            ebs_optimized: cdktf.booleanToTerraform(this._ebsOptimized),
            end_date: cdktf.stringToTerraform(this._endDate),
            end_date_type: cdktf.stringToTerraform(this._endDateType),
            ephemeral_storage: cdktf.booleanToTerraform(this._ephemeralStorage),
            instance_count: cdktf.numberToTerraform(this._instanceCount),
            instance_match_criteria: cdktf.stringToTerraform(this._instanceMatchCriteria),
            instance_platform: cdktf.stringToTerraform(this._instancePlatform),
            instance_type: cdktf.stringToTerraform(this._instanceType),
            outpost_arn: cdktf.stringToTerraform(this._outpostArn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            tenancy: cdktf.stringToTerraform(this._tenancy)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Ec2CapacityReservation.tfResourceType = "aws_ec2_capacity_reservation";
    return Ec2CapacityReservation;
}(cdktf.TerraformResource));
exports.Ec2CapacityReservation = Ec2CapacityReservation;
