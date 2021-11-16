"use strict";
// https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter.html
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
exports.Ec2TrafficMirrorFilter = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter.html aws_ec2_traffic_mirror_filter}
*/
var Ec2TrafficMirrorFilter = /** @class */ (function (_super) {
    __extends(Ec2TrafficMirrorFilter, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter.html aws_ec2_traffic_mirror_filter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TrafficMirrorFilterConfig = {}
    */
    function Ec2TrafficMirrorFilter(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ec2_traffic_mirror_filter',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._networkServices = config.networkServices;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(Ec2TrafficMirrorFilter.prototype, "arn", {
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
    Object.defineProperty(Ec2TrafficMirrorFilter.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TrafficMirrorFilter.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(Ec2TrafficMirrorFilter.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TrafficMirrorFilter.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TrafficMirrorFilter.prototype, "networkServices", {
        get: function () {
            return this.getListAttribute('network_services');
        },
        set: function (value) {
            this._networkServices = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TrafficMirrorFilter.prototype.resetNetworkServices = function () {
        this._networkServices = undefined;
    };
    Object.defineProperty(Ec2TrafficMirrorFilter.prototype, "networkServicesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._networkServices;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TrafficMirrorFilter.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TrafficMirrorFilter.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Ec2TrafficMirrorFilter.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TrafficMirrorFilter.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TrafficMirrorFilter.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Ec2TrafficMirrorFilter.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Ec2TrafficMirrorFilter.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            network_services: cdktf.listMapper(cdktf.stringToTerraform)(this._networkServices),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Ec2TrafficMirrorFilter.tfResourceType = "aws_ec2_traffic_mirror_filter";
    return Ec2TrafficMirrorFilter;
}(cdktf.TerraformResource));
exports.Ec2TrafficMirrorFilter = Ec2TrafficMirrorFilter;
