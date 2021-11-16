"use strict";
// https://www.terraform.io/docs/providers/aws/r/dms_replication_subnet_group.html
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
exports.DmsReplicationSubnetGroup = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_subnet_group.html aws_dms_replication_subnet_group}
*/
var DmsReplicationSubnetGroup = /** @class */ (function (_super) {
    __extends(DmsReplicationSubnetGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_subnet_group.html aws_dms_replication_subnet_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DmsReplicationSubnetGroupConfig
    */
    function DmsReplicationSubnetGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_dms_replication_subnet_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._replicationSubnetGroupDescription = config.replicationSubnetGroupDescription;
        _this._replicationSubnetGroupId = config.replicationSubnetGroupId;
        _this._subnetIds = config.subnetIds;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(DmsReplicationSubnetGroup.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationSubnetGroup.prototype, "replicationSubnetGroupArn", {
        // replication_subnet_group_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('replication_subnet_group_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationSubnetGroup.prototype, "replicationSubnetGroupDescription", {
        get: function () {
            return this.getStringAttribute('replication_subnet_group_description');
        },
        set: function (value) {
            this._replicationSubnetGroupDescription = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationSubnetGroup.prototype, "replicationSubnetGroupDescriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._replicationSubnetGroupDescription;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationSubnetGroup.prototype, "replicationSubnetGroupId", {
        get: function () {
            return this.getStringAttribute('replication_subnet_group_id');
        },
        set: function (value) {
            this._replicationSubnetGroupId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationSubnetGroup.prototype, "replicationSubnetGroupIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._replicationSubnetGroupId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationSubnetGroup.prototype, "subnetIds", {
        get: function () {
            return this.getListAttribute('subnet_ids');
        },
        set: function (value) {
            this._subnetIds = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationSubnetGroup.prototype, "subnetIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationSubnetGroup.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsReplicationSubnetGroup.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DmsReplicationSubnetGroup.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationSubnetGroup.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsReplicationSubnetGroup.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(DmsReplicationSubnetGroup.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationSubnetGroup.prototype, "vpcId", {
        // vpc_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DmsReplicationSubnetGroup.prototype.synthesizeAttributes = function () {
        return {
            replication_subnet_group_description: cdktf.stringToTerraform(this._replicationSubnetGroupDescription),
            replication_subnet_group_id: cdktf.stringToTerraform(this._replicationSubnetGroupId),
            subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DmsReplicationSubnetGroup.tfResourceType = "aws_dms_replication_subnet_group";
    return DmsReplicationSubnetGroup;
}(cdktf.TerraformResource));
exports.DmsReplicationSubnetGroup = DmsReplicationSubnetGroup;
